import * as m from './model';
import r from './reducer';

export const model = m;
export const reducer = r;

export interface State extends m.State { }
