import _ = require('lodash');
import * as React from 'react';
import { useReducer } from 'react';
import { Message, reducer } from '../logic/reducer';
import { Participant } from '../types/Participant';
import { State } from '../types/State';
import { Card, createCallbacks as createCardCallbacks } from './Card';

const initialState = getInitialState();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initiativeOrder = getInitiativeOrder(state.participants);

  const cards = state.participants.map((p) => {
    return (
      <Card
        key={p.id}
        callbacks={createCardCallbacks(dispatch, p.id)}
        participant={p}
        order={initiativeOrder[p.initiative || 0]}
      />
    );
  });

  return (
    <>
      <button onClick={() => dispatch({ type: 'add-row' })}>Add Row</button>
      <button onClick={() => dispatch({ type: 'clear-state' })}>Clear</button>
      <button onClick={() => dispatch({ type: 'sort', order: initiativeOrder })}>Sort</button>
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

function getInitiativeOrder(participants: Array<Participant>): Record<number, number> {
  const initiatives = new Set(participants.map((p) => p.initiative || 0));
  return Array.from(initiatives)
    .sort()
    .reverse()
    .reduce((acc, p, i) => {
      return Object.assign(acc, { [p]: i + 1 });
    }, {});
}

export default Application;
