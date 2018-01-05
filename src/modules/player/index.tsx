import * as m from './model';
import * as c from './constants';
import * as a from './actions';
import at from './actionTypes';
import r from './reducer';
import cPlayer from './components/Player';

export const model = m;
export const constants = c;
export const actions = a;
export const ActionTypes = at;
export const reducer = r;

export interface State extends m.State { }

export const components = {
  Player: cPlayer
};