import { AnyAction } from 'redux';
import { Dungeon } from './model';
import ActionTypes from './actionTypes';

export interface Add extends AnyAction {
  type: ActionTypes.ADD;
  payload: {
    dungeon: Dungeon;
  };
}

export function add(dungeon: Dungeon): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeon: dungeon
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
