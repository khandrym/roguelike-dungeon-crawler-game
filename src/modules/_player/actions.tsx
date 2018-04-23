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

export interface IncreaseExperience extends AnyAction {
  readonly type: ActionTypes.INCREASE_EXPERIENCE;
  readonly payload: {
    readonly value: number;
  };
}

export function increaseExperience(value: number): IncreaseExperience {
  return {
    type: ActionTypes.INCREASE_EXPERIENCE,
    payload: {
      value: value
    }
  };
}

export interface DecreaseExperience extends AnyAction {
  readonly type: ActionTypes.DECREASE_EXPERIENCE;
  readonly payload: {
    readonly value: number;
  };
}

export function decreaseExperience(value: number): DecreaseExperience {
  return {
    type: ActionTypes.DECREASE_EXPERIENCE,
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
  | IncreaseHealth
  | DecreaseHealth
  | IncreaseExperience
  | DecreaseExperience
  | Other;
