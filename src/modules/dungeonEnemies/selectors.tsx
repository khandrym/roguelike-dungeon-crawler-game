import { DungeonEnemies } from './model';
import * as store from '../store';
import * as dungeonEnemy from '../dungeonEnemy';

export function getDungeonEnemies(state: store.State): DungeonEnemies {
  return store.selectors.getDungeonEnemies(state).byId;
}

export function getDungeonEnemy(state: store.State, id: string): dungeonEnemy.State {
  return getDungeonEnemies(state)[id];
}
