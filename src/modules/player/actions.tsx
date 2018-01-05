import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';

export interface IncreaseHealth extends AnyAction {
  readonly type: ActionTypes.INCREASE_HEALTH;
  readonly payload: {
    readonly value: number;
  };
}

export function increaseHealth(value: number): IncreaseHealth {
  return {
    type: ActionTypes.INCREASE_HEALTH,
    payload: {
      value: value
    }
  };
}

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
  type: ActionTypes.OTHER;
}

export type Action =
  | IncreaseHealth
  | DecreaseHealth
  | Other;
