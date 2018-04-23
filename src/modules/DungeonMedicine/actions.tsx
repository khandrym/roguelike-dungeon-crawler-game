import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';

export interface DecreaseHealth extends AnyAction {
  readonly type: ActionTypes.DECREASE_HEALTH;
  readonly payload: {
    readonly value: number;
  };
}

export function decreaseHealth(value: number): DecreaseHealth {
  return {
    type: ActionTypes.DECREASE_HEALTH,
    payload: {
      value: value
    }
  };
}

interface Other extends AnyAction {
  readonly type: ActionTypes.OTHER;
  readonly payload: {};
}

export type Action =
  | DecreaseHealth
  | Other;
