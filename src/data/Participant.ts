import { Record } from 'immutable';

interface ParticipantData {
  name: string;
  initiative: number;
  hp: number;
}

export class Participant extends Record<ParticipantData>({
  name: '',
  initiative: 0,
  hp: 0,
}) {}
