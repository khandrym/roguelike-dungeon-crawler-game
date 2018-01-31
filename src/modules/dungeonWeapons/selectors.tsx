import { DungeonWeapons } from './model';
import * as store from '../store';
import * as dungeonWeapon from '../dungeonWeapon';

export function getAllIds(state: store.State): string[] {
  return store.getDungeonWeapons(state).allIds;
}

export function getAll(state: store.State): DungeonWeapons {
  return store.getDungeonWeapons(state).byId;
}

export function getOne(state: store.State, id: string): dungeonWeapon.State {
  return getAll(state)[id];
}
