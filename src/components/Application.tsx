import { Container, makeStyles } from '@material-ui/core';
import * as React from 'react';
import { useReducer } from 'react';
import { reducer } from '../logic/reducer';
import { Participant } from '../types/Participant';
import { State } from '../types/State';
import { Controls, createCallbacks as createControlsCallbacks } from './Controls';
import { InitiativeCards } from './InitiativeCards';
import { createCallbacksUsingDispatch } from './Card';

const initialState = getInitialState();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initiativeOrder = getInitiativeOrder(state.participants);
  const styles = useStyles();

  return (
    <Container className={styles.containerPadding}>
      <Controls callbacks={createControlsCallbacks(dispatch, initiativeOrder)} />
      <InitiativeCards
        createCallbacks={createCallbacksUsingDispatch(dispatch)}
        participants={state.participants}
        initiativeOrder={initiativeOrder}
      />
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
}));

export default Application;
