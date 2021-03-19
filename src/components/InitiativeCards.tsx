import * as React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Participant } from '../types/Participant';
import { Card, CardCallbacks } from './Card';

interface InitiativeCardProps {
  participants: Array<Participant>;
  initiativeOrder: Record<number, number>;
  createCallbacks: (id: string) => CardCallbacks;
}

export function InitiativeCards(props: InitiativeCardProps) {
  const styles = useStyles();

  const cards = props.participants.map((p) => {
    return (
      <Grid item xs={12}>
        <Card
          key={p.id}
          callbacks={props.createCallbacks(p.id)}
          participant={p}
          order={props.initiativeOrder[p.initiative || 0]}
        />
      </Grid>
    );
  });

  return (
    <Grid container spacing={1} className={styles.extraTopMargin}>
      {cards}
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  extraTopMargin: {
    marginTop: theme.spacing(2),
  },
}));
