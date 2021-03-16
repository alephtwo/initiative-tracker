import * as React from 'react';
import { Participant } from '../data/Participant';

interface CardProps {
  participant: Participant
}

export function Card (props: CardProps): JSX.Element {
  return <h1>Hello, World!</h1>
}