import * as m from './model';
import r from './reducer';
import * as i from './initials';

export const model = m;
export const reducer = r;
export const initials = i;

export interface State extends m.State { }
