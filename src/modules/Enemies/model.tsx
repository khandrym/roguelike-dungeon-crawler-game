import * as Enemy from '../Enemy';

export const NAME = 'enemies';

export interface Enemies {
  [index: string]: Enemy.State;
}

export interface State {
  byId: Enemies;
  allIds: string[];
}
