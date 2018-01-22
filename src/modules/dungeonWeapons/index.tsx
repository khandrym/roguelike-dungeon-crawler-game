import * as m from './model';
import * as c from './constants';
import * as a from './actions';
import at from './actionTypes';
import r from './reducer';
import * as i from './initials';
import * as s from './selectors';

export const model = m;
export const constants = c;
export const actions = a;
export const ActionTypes = at;
export const reducer = r;
export const initials = i;
export const selectors = s;

export interface State extends m.State { }
export interface DungeonWeapons extends m.DungeonWeapons { }
