import { Weapons } from './model';
import * as store from '../store';
import * as weapon from '../weapon';

export function getWeapons(state: store.State): Weapons {
  return store.selectors.getWeapons(state).byId;
}

export function getWeapon(state: store.State, id: string): weapon.State {
  return getWeapons(state)[id];
}
