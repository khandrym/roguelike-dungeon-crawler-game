import * as dungeon from '../dungeon';

export interface Dungeons {
  [index: string]: dungeon.State;
}

export interface State {
  byId: Dungeons;
  allIds: string[];
}
