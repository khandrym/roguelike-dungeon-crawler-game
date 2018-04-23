import { Enemies } from './model';
import * as Store from '../Store';
import * as Enemy from '../Enemy';

export function getAllIds(state: Store.State): string[] {
  return Store.getEnemies(state).allIds;
}

export function getAll(state: Store.State): Enemies {
  return Store.getEnemies(state).byId;
}

export function getOne(state: Store.State, id: string): Enemy.State {
  return getAll(state)[id];
}
