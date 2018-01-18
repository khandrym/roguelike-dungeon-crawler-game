import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as dungeonWeapon from '../dungeonWeapon';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly dungeonWeapon: dungeonWeapon.State;
  };
}

export function add(newDungeonWeapon: dungeonWeapon.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeonWeapon: newDungeonWeapon
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
