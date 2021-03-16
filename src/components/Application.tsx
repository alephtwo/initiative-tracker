import * as React from 'react';
import { useReducer } from 'react';
import { reducer, State } from '../logic/reducer';

const initialState = new State();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: 'report' })}>Report</button>
      <h1>Hello, World!</h1>
    </>
  );
}

export default Application;
