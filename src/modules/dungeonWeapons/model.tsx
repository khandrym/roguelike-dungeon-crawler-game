export interface DungeonWeapon {
  id: string;
  weaponId: string;
  locationId: string;
}

export interface DungeonWeapons {
  [index: string]: DungeonWeapon;
}

export interface State {
  byId: DungeonWeapons;
  allIds: string[];
}
