import * as c from './constants';
import * as a from './actions';
import at from './actionTypes';
import r from './reducer';
import * as m from './model';

export const constants = c;
export const actions = a;
export const ActionTypes = at;
export const reducer = r;
export const model = m;

export interface Player extends m.Player { }
