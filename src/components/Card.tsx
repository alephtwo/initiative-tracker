import * as React from 'react';
import { Participant } from '../types/Participant';
import { Message } from '../logic/reducer';

interface CardProps {
  participant: Participant;
  callbacks: CardCallbacks;
}

export function Card(props: CardProps): JSX.Element {
  const { callbacks, participant } = props;

  return (
    <div>
      <pre>{participant.id}</pre>
      <input type="text" value={participant.name} onChange={callbacks.setName} />
      <input type="text" value={participant.initiative} onChange={callbacks.setInitiative} />
      <input type="text" value={participant.hp} onChange={callbacks.setHp} />
      <button onClick={callbacks.deleteRow}>Delete</button>
    </div>
  );
}

export function createCallbacks(dispatch: React.Dispatch<Message>, id: string): CardCallbacks {
  return {
    deleteRow: () => dispatch({ type: 'delete-row', id: id }),
    setName: (e) => dispatch({ type: 'set-name', id: id, name: e.target.value }),
    setInitiative: (e) => dispatch({ type: 'set-initiative', id: id, initiative: e.target.value }),
    setHp: (e) => dispatch({ type: 'set-hp', id: id, hp: e.target.value }),
  };
}

interface CardCallbacks {
  deleteRow: () => void;
  setName: React.ChangeEventHandler<HTMLInputElement>;
  setInitiative: React.ChangeEventHandler<HTMLInputElement>;
  setHp: React.ChangeEventHandler<HTMLInputElement>;
}
