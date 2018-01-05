export interface Weapon {
  id: string;
  name: string;
  attack: number;
}

export interface Weapons {
  [index: string]: Weapon;
}

export interface State {
  byId: Weapons;
  allIds: string[];
}
