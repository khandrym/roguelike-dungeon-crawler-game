import { AnyAction } from 'redux';
import { DungeonWeapon } from './model';
import ActionTypes from './actionTypes';

export interface Add extends AnyAction {
  type: ActionTypes.ADD;
  payload: {
    dungeonWeapon: DungeonWeapon;
  };
}

export function add(dungeonWeapon: DungeonWeapon): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeonWeapon: dungeonWeapon
    }
  };
}

export interface Delete extends AnyAction {
  type: ActionTypes.DELETE;
  payload: {
    id: string;
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
  type: ActionTypes.OTHER;
}

export type Action =
  | Add
  | Delete
  | Other;
