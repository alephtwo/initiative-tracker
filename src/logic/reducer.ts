import { List, Record } from 'immutable';

export class State extends Record({
  participants: List<Participant>(),
}) {}

export type Message = { type: 'report' };

export function reducer(state: State, action: Message): State {
  console.log(state.toJSON());
  return state;
}
