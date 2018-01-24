import * as m from './model';
import * as a from './actions';
import at from './actionTypes';
import r from './reducer';
import Dungeon from './containers/Dungeon';

export const model = m;
export const actions = a;
export const ActionTypes = at;
export const reducer = r;

export interface State extends m.State { }

export const containers = {
  Dungeon: Dungeon
};
