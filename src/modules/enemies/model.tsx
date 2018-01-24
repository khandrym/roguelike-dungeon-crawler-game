import * as enemy from '../enemy';

export const NAME = 'enemies';

export interface Enemies {
  [index: string]: enemy.State;
}

export interface State {
  byId: Enemies;
  allIds: string[];
}
