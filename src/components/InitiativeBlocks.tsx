import * as React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { Participant } from '../types/Participant';
import { InitiativeBlock, InitiativeBlockCallbacks } from './InitiativeBlock';

interface InitiativeBlocksProps {
  participants: Array<Participant>;
  initiativeOrder: Record<number, number>;
  createCallbacks: (id: string) => InitiativeBlockCallbacks;
}

export function InitiativeBlocks(props: InitiativeBlocksProps) {
  const styles = useStyles();

  const blocks = props.participants.map((p) => {
    return (
      <Grid item xs={12}>
        <InitiativeBlock
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
      {blocks}
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  extraTopMargin: {
    marginTop: theme.spacing(2),
  },
}));
