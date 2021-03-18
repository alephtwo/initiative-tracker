import * as React from 'react';
import { useReducer } from 'react';
import { Message, reducer } from '../logic/reducer';
import { State } from '../types/State';
import { Card, createCallbacks as createCardCallbacks } from './Card';

const initialState = getInitialState();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const cards = state.participants.map((p) => {
    return <Card key={p.id} callbacks={createCardCallbacks(dispatch, p.id)} participant={p} />;
  });

  return (
    <>
      <button onClick={() => dispatch({ type: 'add-row' })}>Add Row</button>
      <button onClick={() => dispatch({ type: 'clear-state' })}>Clear</button>
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

export default Application;
