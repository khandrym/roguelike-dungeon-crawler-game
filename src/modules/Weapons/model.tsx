import * as Weapon from '../Weapon';

export const NAME = 'weapons';

export interface Weapons {
  [index: string]: Weapon.State;
}

export interface State {
  byId: Weapons;
  allIds: string[];
}
