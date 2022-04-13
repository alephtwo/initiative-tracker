import * as React from 'react';
import { Participant } from '../types/Participant';
import { Message } from '../logic/reducer';
import { sanitizeNumber } from '../logic/sanitizeNumber';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

interface InitiativeBlockProps {
  participant: Participant;
  callbacks: InitiativeBlockCallbacks;
  order: number;
}

export function InitiativeBlock(props: InitiativeBlockProps): JSX.Element {
  const { callbacks, order, participant } = props;

  return (
    <Grid container direction="row" spacing={1} alignItems="stretch">
      <Grid container item direction="row" justifyContent="center" xs={1} alignItems="center">
        <Grid item>
          <Typography variant="body1" sx={styles.initiativeOrder}>
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
        <Button sx={styles.button} fullWidth variant="contained" color="secondary" onClick={callbacks.deleteRow}>
          <DeleteIcon />
        </Button>
      </Grid>
    </Grid>
  );
}

export const createCallbacksUsingDispatch =
  (dispatch: React.Dispatch<Message>) =>
  (id: string): InitiativeBlockCallbacks => {
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

const styles = {
  initiativeOrder: {
    fontWeight: 'bold',
  },
  button: {
    minHeight: '100%',
  },
};

export interface InitiativeBlockCallbacks {
  deleteRow: () => void;
  setName: React.ChangeEventHandler<HTMLInputElement>;
  setInitiative: React.ChangeEventHandler<HTMLInputElement>;
  setHp: React.ChangeEventHandler<HTMLInputElement>;
}
