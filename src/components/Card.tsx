import * as React from 'react';
import { Participant } from '../data/Participant';

interface CardProps {
  participant: Participant;
}

export function Card(props: CardProps): JSX.Element {
  const { participant } = props;
  return (
    <div>
      <input type="text" value={participant.name} />
      <input type="text" value={participant.initiative} />
      <input type="text" value={participant.hp} />
    </div>
  );
}
