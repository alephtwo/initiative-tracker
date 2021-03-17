import { List, Record } from 'immutable';
import { Participant } from '../data/Participant';
import * as uuid from 'uuid';

export class State extends Record({
  participants: List<Participant>(),
}) {}

export type Message = { type: 'add-row' };

export function reducer(state: State, action: Message): State {
  console.log(state.toJSON());
  switch (action.type) {
    case 'add-row':
      return addRow(state);
    default:
      return state;
  }
}

function addRow(state: State): State {
  const row = new Participant({
    id: uuid.v4(),
  });

  return state.update('participants', (p) => p.push(row));
}
