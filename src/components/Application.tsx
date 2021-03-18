import * as React from 'react';
import { useReducer } from 'react';
import { Message, reducer } from '../logic/reducer';
import { State } from '../types/State';
import { Card, createCallbacks as createCardCallbacks } from './Card';

const initialState = getInitialState();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const callbacks = createCallbacks(dispatch);

  const cards = state.participants.map((p) => {
    return <Card key={p.id} callbacks={createCardCallbacks(dispatch, p.id)} participant={p} />;
  });

  return (
    <>
      <button onClick={callbacks.addRow}>Add Row</button>
      <hr />
      {cards}
    </>
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

function createCallbacks(dispatch: React.Dispatch<Message>) {
  return {
    addRow: () => dispatch({ type: 'add-row' }),
  };
}

export default Application;
