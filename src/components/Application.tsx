import * as React from 'react';
import { useReducer } from 'react';
import { Message, reducer } from '../logic/reducer';
import { State } from '../types/State';
import { Card } from './Card';

const initialState: State = {
  participants: []
}

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const callbacks = createCallbacks(dispatch);

  const cards = state.participants.map((p) => {
    return <Card key={p.id} dispatch={dispatch} participant={p} />;
  });

  return (
    <>
      <button onClick={callbacks.addRow}>Add Row</button>
      <hr />
      {cards}
    </>
  );
}

function createCallbacks(dispatch: React.Dispatch<Message>) {
  return {
    addRow: () => dispatch({ type: 'add-row' }),
  };
}

export default Application;
