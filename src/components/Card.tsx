import * as React from 'react';
import { Participant } from '../data/Participant';
import { Message } from '../logic/reducer';

interface CardProps {
  dispatch: React.Dispatch<Message>;
  participant: Participant;
}

export function Card(props: CardProps): JSX.Element {
  const { dispatch, participant } = props;
  const callbacks = createCallbacks(dispatch, participant.id);

  return (
    <div>
      <input type="text" value={participant.name} />
      <input type="text" value={participant.initiative} />
      <input type="text" value={participant.hp} />
      <button onClick={callbacks.deleteRow}>Delete</button>
    </div>
  );
}

function createCallbacks(dispatch: React.Dispatch<Message>, id: string) {
  return {
    deleteRow: () => dispatch({ type: 'delete-row', id: id }),
  };
}
