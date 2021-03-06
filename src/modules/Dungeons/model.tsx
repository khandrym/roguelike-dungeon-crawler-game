import * as Dungeon from '../Dungeon';

export const NAME = 'dungeons';

export interface Dungeons {
  [index: string]: Dungeon.State;
}

export interface State {
  byId: Dungeons;
  allIds: string[];
}
