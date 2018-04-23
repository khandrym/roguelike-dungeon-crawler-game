import * as DungeonWeapon from '../_dungeonWeapon';

export const NAME = 'dungeonWeapons';

export interface DungeonWeapons {
  [index: string]: DungeonWeapon.State;
}

export interface State {
  byId: DungeonWeapons;
  allIds: string[];
}
