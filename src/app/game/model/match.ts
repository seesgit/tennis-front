import {Set} from "./set";

export class Match {
  id?: number;
  score?: string;
  game?: number;
  sets: Set[] = [];
}
