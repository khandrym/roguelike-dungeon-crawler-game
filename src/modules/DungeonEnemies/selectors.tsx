import { DungeonEnemies } from './model';
import * as Store from '../Store';
import * as DungeonEnemy from '../DungeonEnemy';

export function getAllIds(state: Store.State): string[] {
  return Store.getDungeonEnemies(state).allIds;
}

export function getAll(state: Store.State): DungeonEnemies {
  return Store.getDungeonEnemies(state).byId;
}

export function getOne(state: Store.State, id: string): DungeonEnemy.State {
  return getAll(state)[id];
}
