import { Enemies } from './model';
import * as store from '../store';
import * as enemy from '../enemy';

export function getAllIds(state: store.State): string[] {
  return store.getEnemies(state).allIds;
}

export function getAll(state: store.State): Enemies {
  return store.getEnemies(state).byId;
}

export function getOne(state: store.State, id: string): enemy.State {
  return getAll(state)[id];
}
