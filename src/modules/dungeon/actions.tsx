import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';

interface Other extends AnyAction {
  readonly type: ActionTypes.OTHER;
  readonly payload: {};
}

export type Action =
  | Other;
