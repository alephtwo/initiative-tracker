import * as uuid from 'uuid';
import { MaybeInt } from './MaybeInt';

export interface Participant {
  id: string;
  name: string;
  initiative: MaybeInt;
  hp: MaybeInt;
}

export function emptyParticipant(): Participant {
  return {
    id: uuid.v4(),
    name: '',
    initiative: '',
    hp: '',
  };
}
