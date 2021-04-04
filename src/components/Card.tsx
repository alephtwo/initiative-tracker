import * as React from 'react';
import { Participant } from '../types/Participant';
import { Message } from '../logic/reducer';
import { sanitizeNumber } from '../logic/sanitizeNumber';
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

interface CardProps {
  participant: Participant;
  callbacks: CardCallbacks;
  order: number;
}

export function Card(props: CardProps): JSX.Element {
  const { callbacks, order, participant } = props;
  const styles = useStyles();

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={1}>
        <Typography variant="body1" className={styles.initiativeOrder}>
          {order}
        </Typography>
      </Grid>
      <Grid item xs={5}>
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
      <Grid item xs={2}>
        <Button fullWidth variant="outlined" color="secondary" onClick={callbacks.deleteRow}>
          Delete
        </Button>
      </Grid>
    </Grid>
  );
}

export const createCallbacksUsingDispatch = (dispatch: React.Dispatch<Message>) => (id: string): CardCallbacks => {
  return createCallbacks(dispatch, id);
};

export function createCallbacks(dispatch: React.Dispatch<Message>, id: string): CardCallbacks {
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
    height: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
}));

export interface CardCallbacks {
  deleteRow: () => void;
  setName: React.ChangeEventHandler<HTMLInputElement>;
  setInitiative: React.ChangeEventHandler<HTMLInputElement>;
  setHp: React.ChangeEventHandler<HTMLInputElement>;
}
