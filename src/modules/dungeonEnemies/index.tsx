import * as m from './model';
import * as a from './actions';
import at from './actionTypes';
import r from './reducer';
import * as s from './selectors';

export const model = m;
export const actions = a;
export const ActionTypes = at;
export const reducer = r;
export const selectors = s;

export interface State extends m.State { }
export interface DungeonEnemies extends m.DungeonEnemies { }
