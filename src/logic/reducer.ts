import * as uuid from 'uuid';
import { emptyParticipant, Participant } from '../types/Participant';
import produce from 'immer';
import { State } from '../types/State';
import * as _ from  'lodash';

export type Message = { type: 'add-row' } | { type: 'delete-row'; id: string };

export function reducer(state: State, action: Message): State {
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
  return produce(state, next => {
    next.participants.push(emptyParticipant());
  });
}

function deleteRow(state: State, id: string): State {
  return produce(state, next => {
    _.remove(next.participants, p => p.id === id);
  });
}
