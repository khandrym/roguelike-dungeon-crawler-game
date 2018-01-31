import { Weapons } from './model';
import * as store from '../store';
import * as weapon from '../weapon';

export function getAllIds(state: store.State): string[] {
  return store.getWeapons(state).allIds;
}

export function getAll(state: store.State): Weapons {
  return store.getWeapons(state).byId;
}

export function getOne(state: store.State, id: string): weapon.State {
  return getAll(state)[id];
}
