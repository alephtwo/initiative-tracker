import * as React from 'react';
import { Grid } from '@mui/material';
import { Participant } from '../types/Participant';
import { InitiativeBlock, InitiativeBlockCallbacks } from './InitiativeBlock';

interface InitiativeBlocksProps {
  participants: Array<Participant>;
  initiativeOrder: Record<number, number>;
  createCallbacks: (id: string) => InitiativeBlockCallbacks;
}

export function InitiativeBlocks(props: InitiativeBlocksProps) {
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
    <Grid container spacing={1} sx={styles.extraTopMargin}>
      {blocks}
    </Grid>
  );
}

const styles = {
  extraTopMargin: {
    marginTop: 2,
  },
};
