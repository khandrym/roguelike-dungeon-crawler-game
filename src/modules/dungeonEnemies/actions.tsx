import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as dungeonEnemy from '../dungeonEnemy';

export interface Add extends AnyAction {
  type: ActionTypes.ADD;
  payload: {
    dungeonEnemy: dungeonEnemy.State;
  };
}

export function add(newDungeonEnemy: dungeonEnemy.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeonEnemy: newDungeonEnemy
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
