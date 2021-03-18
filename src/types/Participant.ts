import * as uuid from 'uuid';

export interface Participant {
  id: string;
  name: string;
  initiative: number;
  hp: number;
}

export function emptyParticipant (): Participant {
  return {
    id: uuid.v4(),
    name: '',
    initiative: 0,
    hp: 0
  };
}