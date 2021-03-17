import { Record } from 'immutable';

interface ParticipantData {
  id: string;
  name: string;
  initiative: number;
  hp: number;
}

export class Participant extends Record<ParticipantData>({
  id: '',
  name: '',
  initiative: 0,
  hp: 0,
}) {}
