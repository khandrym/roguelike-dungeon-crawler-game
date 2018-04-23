import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as Enemy from '../_enemy';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly enemy: Enemy.State;
  };
}

export function add(newEnemy: Enemy.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      enemy: newEnemy
    }
  };
}

export interface Delete extends AnyAction {
  readonly type: ActionTypes.DELETE;
  readonly payload: {
    readonly id: string;
  };
}

export function del(id: string): Delete {
  return {
    type: ActionTypes.DELETE,
    payload: {
      id: id
    }
  };
}

interface Other extends AnyAction {
  readonly type: ActionTypes.OTHER;
  readonly payload: {};
}

export type Action =
  | Add
  | Delete
  | Other;
