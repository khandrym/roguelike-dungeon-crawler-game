import * as m from './model';
import * as a from './actions';
import at from './actionTypes';
import r from './reducer';
import Player from './components/Player';

export const model = m;
export const actions = a;
export const ActionTypes = at;
export const reducer = r;

export interface State extends m.State { }

export const components = {
  Player: Player
};
