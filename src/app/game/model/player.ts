import {Match} from "./match";

export class Player {
  id?: number;
  name?: string;
  firstName?: string;
  match: Match = new Match;
}
