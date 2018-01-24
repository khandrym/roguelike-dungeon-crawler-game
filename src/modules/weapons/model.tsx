import * as weapon from '../weapon';

export const NAME = 'weapons';

export interface Weapons {
  [index: string]: weapon.State;
}

export interface State {
  byId: Weapons;
  allIds: string[];
}
