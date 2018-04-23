import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as DungeonMedicine from '../_dungeonMedicine';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly dungeonMedicine: DungeonMedicine.State;
  };
}

export function add(newDungeonMedicine: DungeonMedicine.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeonMedicine: newDungeonMedicine
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
  | DecreaseHealth
  | Other;
