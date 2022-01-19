import * as React from 'react';
import { Button, Grid } from '@mui/material';
import { Add as AddIcon, Clear as ClearIcon, Sort as SortIcon } from '@mui/icons-material';

import { Message } from '../logic/reducer';

interface ControlsProps {
  callbacks: ControlsCallbacks;
}

export function Controls(props: ControlsProps): JSX.Element {
  const { callbacks } = props;

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Button fullWidth variant="contained" color="primary" onClick={callbacks.addRow}>
          <AddIcon /> Add Row
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth variant="contained" color="primary" onClick={callbacks.sort}>
          <SortIcon /> Sort
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth variant="contained" color="secondary" onClick={callbacks.clear}>
          <ClearIcon /> Clear
        </Button>
      </Grid>
    </Grid>
  );
}

interface ControlsCallbacks {
  addRow: () => void;
  sort: () => void;
  clear: () => void;
}

export function createCallbacks(
  dispatch: React.Dispatch<Message>,
  initiativeOrder: Record<number, number>
): ControlsCallbacks {
  return {
    addRow: () => dispatch({ type: 'add-row' }),
    sort: () => dispatch({ type: 'sort', order: initiativeOrder }),
    clear: () => dispatch({ type: 'clear-state' }),
  };
}
