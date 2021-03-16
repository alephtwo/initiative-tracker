import { List, Record } from 'immutable';
import { Participant } from '../data/Participant';

export class State extends Record({
  participants: List<Participant>(),
}) {}

export type Message = { type: 'add-row' };

export function reducer(state: State, action: Message): State {
  console.log(state.toJSON());
  switch (action.type) {
    case 'add-row':
      return state.update("participants", p => p.push(new Participant()));
    default:
      return state;
  }
}
