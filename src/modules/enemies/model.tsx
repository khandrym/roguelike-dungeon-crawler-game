export interface Enemy {
  id: string;
  name: string;
  experience: number;
  weaponId: string;
}

export interface Enemies {
  [index: string]: Enemy;
}

export interface State {
  byId: Enemies;
  allIds: string[];
}
