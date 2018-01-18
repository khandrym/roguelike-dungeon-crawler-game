import * as enemy from '../enemy';

export interface Enemies {
  [index: string]: enemy.State;
}

export interface State {
  byId: Enemies;
  allIds: string[];
}
