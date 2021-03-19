import { Button, Container, Grid, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { useReducer } from 'react';
import { reducer } from '../logic/reducer';
import { Participant } from '../types/Participant';
import { State } from '../types/State';
import { Card, createCallbacks as createCardCallbacks } from './Card';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import SortIcon from '@material-ui/icons/Sort';

const initialState = getInitialState();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initiativeOrder = getInitiativeOrder(state.participants);
  const styles = useStyles();

  const cards = state.participants.map((p) => {
    return (
      <Grid item xs={12}>
        <Card
          key={p.id}
          callbacks={createCardCallbacks(dispatch, p.id)}
          participant={p}
          order={initiativeOrder[p.initiative || 0]}
        />
      </Grid>
    );
  });

  return (
    <Container className={styles.containerPadding}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Button fullWidth variant="outlined" color="primary" onClick={() => dispatch({ type: 'add-row' })}>
            <AddIcon /> Add Row
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => dispatch({ type: 'sort', order: initiativeOrder })}
          >
            <SortIcon /> Sort
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant="outlined" color="secondary" onClick={() => dispatch({ type: 'clear-state' })}>
            <ClearIcon /> Clear
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1} className={styles.extraTopMargin}>
        {cards}
      </Grid>
    </Container>
  );
}

function getInitialState(): State {
  const stored = localStorage.getItem('state');
  if (stored) {
    // If the state is stored, use it.
    return JSON.parse(stored);
  }

  // Otherwise just return the stuff.
  return {
    participants: [],
  };
}

function getInitiativeOrder(participants: Array<Participant>): Record<number, number> {
  const initiatives = new Set(participants.map((p) => p.initiative || 0));
  return Array.from(initiatives)
    .sort()
    .reverse()
    .reduce((acc, p, i) => {
      return Object.assign(acc, { [p]: i + 1 });
    }, {});
}

const useStyles = makeStyles((theme) => ({
  containerPadding: {
    padding: theme.spacing(1),
  },
  extraTopMargin: {
    marginTop: theme.spacing(2),
  },
}));

export default Application;
