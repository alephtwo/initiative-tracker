import { Container } from "@mui/material";
import * as React from "react";
import { useReducer } from "react";
import { reducer } from "../logic/reducer";
import { Participant } from "../types/Participant";
import { State } from "../types/State";
import { Controls, createCallbacks as createControlsCallbacks } from "./Controls";
import { InitiativeBlocks } from "./InitiativeBlocks";
import { createCallbacksUsingDispatch } from "./InitiativeBlock";

const initialState = getInitialState();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initiativeOrder = getInitiativeOrder(state.participants);

  return (
    <Container
      sx={{
        padding: 1,
      }}
    >
      <Controls callbacks={createControlsCallbacks(dispatch, initiativeOrder)} />
      <InitiativeBlocks
        createCallbacks={createCallbacksUsingDispatch(dispatch)}
        participants={state.participants}
        initiativeOrder={initiativeOrder}
      />
    </Container>
  );
}

function getInitialState(): State {
  const stored = localStorage.getItem("state");
  if (stored) {
    // If the state is stored, use it.
    return JSON.parse(stored) as State;
  }

  // Otherwise just return the stuff.
  return {
    participants: [],
  };
}

function getInitiativeOrder(participants: Array<Participant>): Record<number, number> {
  const initiatives = new Set(participants.map((p) => p.initiative || 0));
  return Array.from(initiatives)
    .sort((a, b) => a - b)
    .reverse()
    .reduce((acc, p, i) => {
      return Object.assign(acc, { [p]: i + 1 });
    }, {});
}

export default Application;
