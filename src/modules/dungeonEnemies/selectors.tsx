import { DungeonEnemies } from './model';
import * as store from '../store';
import * as dungeonEnemy from '../dungeonEnemy';

export function getAllIds(state: store.State): string[] {
  return store.getDungeonEnemies(state).allIds;
}

export function getAll(state: store.State): DungeonEnemies {
  return store.getDungeonEnemies(state).byId;
}

export function getOne(state: store.State, id: string): dungeonEnemy.State {
  return getAll(state)[id];
}
