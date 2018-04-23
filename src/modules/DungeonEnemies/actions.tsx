import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as DungeonEnemy from '../DungeonEnemy';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly dungeonEnemy: DungeonEnemy.State;
  };
}

export function add(newDungeonEnemy: DungeonEnemy.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeonEnemy: newDungeonEnemy
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

export interface IncreaseHealth extends AnyAction {
  readonly type: ActionTypes.INCREASE_HEALTH;
  readonly payload: {
    readonly id: string;
    readonly value: number;
  };
}

export function increaseHealth(id: string, value: number): IncreaseHealth {
  return {
    type: ActionTypes.INCREASE_HEALTH,
    payload: {
      id: id,
      value: value
    }
  };
}

export interface DecreaseHealth extends AnyAction {
  readonly type: ActionTypes.DECREASE_HEALTH;
  readonly payload: {
    readonly id: string;
    readonly value: number;
  };
}

export function decreaseHealth(id: string, value: number): DecreaseHealth {
  return {
    type: ActionTypes.DECREASE_HEALTH,
    payload: {
      id: id,
      value: value
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
  | IncreaseHealth
  | DecreaseHealth
  | Other;
