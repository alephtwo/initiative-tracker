import * as React from 'react';
import { Participant } from '../types/Participant';
import { Message } from '../logic/reducer';
import { sanitizeNumber } from '../logic/sanitizeNumber';
import { Box, Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';

interface InitiativeBlockProps {
  participant: Participant;
  callbacks: InitiativeBlockCallbacks;
  order: number;
}

export function InitiativeBlock(props: InitiativeBlockProps): JSX.Element {
  const { callbacks, order, participant } = props;
  const styles = useStyles();

  return (
    <Grid container direction="row" spacing={1} alignItems="stretch">
      <Grid container direction="row" xs={1} justify="center" alignItems="center">
        <Grid item>
          <Typography variant="body1" className={styles.initiativeOrder}>
            {order}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          variant="outlined"
          label="Name"
          value={participant.name}
          onChange={callbacks.setName}
          placeholder={participant.placeholder}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Initiative"
          value={participant.initiative}
          onChange={callbacks.setInitiative}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField fullWidth variant="outlined" label="HP" value={participant.hp} onChange={callbacks.setHp} />
      </Grid>
      <Grid item xs={1}>
        <Button className={styles.button} fullWidth variant="outlined" color="secondary" onClick={callbacks.deleteRow}>
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
}

export const createCallbacksUsingDispatch = (dispatch: React.Dispatch<Message>) => (
  id: string
): InitiativeBlockCallbacks => {
  return createCallbacks(dispatch, id);
};

export function createCallbacks(dispatch: React.Dispatch<Message>, id: string): InitiativeBlockCallbacks {
  return {
    deleteRow: () => dispatch({ type: 'delete-row', id: id }),
    setName: (e) =>
      dispatch({
        type: 'set-name',
        id: id,
        name: e.target.value,
      }),
    setInitiative: (e) =>
      dispatch({
        type: 'set-initiative',
        id: id,
        initiative: sanitizeNumber(e.target.value, 3),
      }),
    setHp: (e) =>
      dispatch({
        type: 'set-hp',
        id: id,
        hp: sanitizeNumber(e.target.value, 3),
      }),
  };
}

const useStyles = makeStyles((theme) => ({
  initiativeOrder: {
    fontWeight: 'bold',
  },
  button: {
    minHeight: '100%',
  },
}));

export interface InitiativeBlockCallbacks {
  deleteRow: () => void;
  setName: React.ChangeEventHandler<HTMLInputElement>;
  setInitiative: React.ChangeEventHandler<HTMLInputElement>;
  setHp: React.ChangeEventHandler<HTMLInputElement>;
}
