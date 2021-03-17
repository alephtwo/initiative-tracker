import * as React from 'react';
import { Participant } from '../data/Participant';

interface CardProps {
  participant: Participant;
  deleteRow: () => void;
}

export function Card(props: CardProps): JSX.Element {
  const { participant, deleteRow } = props;
  return (
    <div>
      <input type="text" value={participant.name} />
      <input type="text" value={participant.initiative} />
      <input type="text" value={participant.hp} />
      <button onClick={deleteRow}>Delete</button>
    </div>
  );
}
