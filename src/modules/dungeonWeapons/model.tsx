import * as dungeonWeapon from '../dungeonWeapon';

export const NAME = 'dungeonWeapons';

export interface DungeonWeapons {
  [index: string]: dungeonWeapon.State;
}

export interface State {
  byId: DungeonWeapons;
  allIds: string[];
}
