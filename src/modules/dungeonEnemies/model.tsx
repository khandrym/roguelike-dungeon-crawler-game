import * as dungeonEnemy from '../dungeonEnemy';

export interface DungeonEnemies {
  [index: string]: dungeonEnemy.State;
}

export interface State {
  byId: DungeonEnemies;
  allIds: string[];
}
