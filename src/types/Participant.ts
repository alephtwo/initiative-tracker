import * as uuid from "uuid";
import randomName from "../logic/randomName";
import { MaybeInt } from "./MaybeInt";

export interface Participant {
  id: string;
  name: string;
  placeholder: string;
  initiative: MaybeInt;
  hp: MaybeInt;
}

export function emptyParticipant(): Participant {
  return {
    id: uuid.v4(),
    name: "",
    placeholder: randomName(),
    initiative: "",
    hp: "",
  };
}
