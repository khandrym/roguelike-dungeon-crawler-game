import * as DungeonEnemy from '../DungeonEnemy';

export const NAME = 'dungeonEnemies';

export interface DungeonEnemies {
  [index: string]: DungeonEnemy.State;
}

export interface State {
  byId: DungeonEnemies;
  allIds: string[];
}
