import { emptyParticipant, Participant } from '../types/Participant';
import produce from 'immer';
import { State } from '../types/State';
import * as _ from 'lodash';
import { MaybeInt } from '../types/MaybeInt';

export type Message =
  | { type: 'clear-state' }
  | { type: 'add-row' }
  | { type: 'sort'; order: Record<number, number> }
  | { type: 'delete-row'; id: string }
  | { type: 'set-name'; id: string; name: string }
  | { type: 'set-initiative'; id: string; initiative: MaybeInt }
  | { type: 'set-hp'; id: string; hp: MaybeInt };

export function reducer(state: State, action: Message): State {
  const next = getNextState(state, action);
  // Persist the new state to localstorage
  localStorage.setItem('state', JSON.stringify(next));
  return next;
}

function getNextState(state: State, action: Message): State {
  switch (action.type) {
    case 'clear-state':
      return { participants: [] };
    case 'add-row':
      return addRow(state);
    case 'sort':
      return sort(state, action.order);
    case 'delete-row':
      return deleteRow(state, action.id);
    case 'set-name':
      return setName(state, action.id, action.name);
    case 'set-initiative':
      return setInitiative(state, action.id, action.initiative);
    case 'set-hp':
      return setHp(state, action.id, action.hp);
    default:
      return state;
  }
}

function addRow(state: State): State {
  return produce(state, (next) => {
    next.participants.push(emptyParticipant());
  });
}

function sort(state: State, order: Record<number, number>) {
  return produce(state, (next) => {
    next.participants = _.sortBy(next.participants, [
      // first by order (descending)...
      (p) => order[p.initiative || 0],
    ]);
  });
}

function deleteRow(state: State, id: string): State {
  return produce(state, (next) => {
    _.remove(next.participants, (p) => p.id === id);
  });
}

function setName(state: State, id: string, name: string): State {
  return updateProperty(state, id, (participant) => {
    participant.name = name;
  });
}

function setInitiative(state: State, id: string, initiative: MaybeInt): State {
  return updateProperty(state, id, (participant) => {
    participant.initiative = initiative;
  });
}

function setHp(state: State, id: string, hp: MaybeInt): State {
  return updateProperty(state, id, (participant) => {
    participant.hp = hp;
  });
}

function updateProperty(state: State, id: string, update: (participant: Participant) => void) {
  return produce(state, (next) => {
    const match = next.participants.find((p) => p.id === id);
    if (match) {
      update(match);
    }
  });
}
