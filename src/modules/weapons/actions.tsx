import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as weapon from '../weapon';

export interface Add extends AnyAction {
  type: ActionTypes.ADD;
  payload: {
    weapon: weapon.State;
  };
}

export function add(newWeapon: weapon.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      weapon: newWeapon
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
