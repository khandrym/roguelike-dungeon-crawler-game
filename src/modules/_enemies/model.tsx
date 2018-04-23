import * as Enemy from '../_enemy';

export const NAME = 'enemies';

export interface Enemies {
  [index: string]: Enemy.State;
}

export interface State {
  byId: Enemies;
  allIds: string[];
}
