import { Weapons } from './model';
import * as Store from '../_store';
import * as Weapon from '../_weapon';

export function getAllIds(state: Store.State): string[] {
  return Store.getWeapons(state).allIds;
}

export function getAll(state: Store.State): Weapons {
  return Store.getWeapons(state).byId;
}

export function getOne(state: Store.State, id: string): Weapon.State {
  return getAll(state)[id];
}
