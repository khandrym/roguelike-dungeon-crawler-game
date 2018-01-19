import * as m from './model';
import r from './reducer';
import * as i from './initials';
import * as s from './selectors';

export const model = m;
export const reducer = r;
export const initials = i;
export const selectors = s;

export interface State extends m.State { }
