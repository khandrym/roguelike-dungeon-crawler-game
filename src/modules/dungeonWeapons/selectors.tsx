import { DungeonWeapons } from './model';
import * as store from '../store';
import * as dungeonWeapon from '../dungeonWeapon';

export function getDungeonWeapons(state: store.State): DungeonWeapons {
  return store.getDungeonWeapons(state).byId;
}

export function getDungeonWeapon(state: store.State, id: string): dungeonWeapon.State {
  return getDungeonWeapons(state)[id];
}
