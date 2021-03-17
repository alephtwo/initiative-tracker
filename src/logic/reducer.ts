import { List, Record } from 'immutable';
import { Participant } from '../data/Participant';
import * as uuid from 'uuid';

export class State extends Record({
  participants: List<Participant>(),
}) {}

export type Message = { type: 'add-row' } | { type: 'delete-row'; id: string };

export function reducer(state: State, action: Message): State {
  console.log(state.toJSON());
  switch (action.type) {
    case 'add-row':
      return addRow(state);
    case 'delete-row':
      return deleteRow(state, action.id);
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

function deleteRow(state: State, id: string): State {
  return state.update('participants', (participants) => {
    return participants.filterNot((p) => p.id === id);
  });
}
