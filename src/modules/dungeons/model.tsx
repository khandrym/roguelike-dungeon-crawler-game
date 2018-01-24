import * as dungeon from '../dungeon';

export const NAME = 'dungeons';

export interface Dungeons {
  [index: string]: dungeon.State;
}

export interface State {
  byId: Dungeons;
  allIds: string[];
}
