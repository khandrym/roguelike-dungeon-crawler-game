import { DungeonWeapons } from './model';
import * as Store from '../_store';
import * as DungeonWeapon from '../_dungeonWeapon';

export function getAllIds(state: Store.State): string[] {
  return Store.getDungeonWeapons(state).allIds;
}

export function getAll(state: Store.State): DungeonWeapons {
  return Store.getDungeonWeapons(state).byId;
}

export function getOne(state: Store.State, id: string): DungeonWeapon.State {
  return getAll(state)[id];
}
