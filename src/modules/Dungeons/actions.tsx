import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as Dungeon from '../Dungeon';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly dungeon: Dungeon.State;
  };
}

export function add(newDungeon: Dungeon.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeon: newDungeon
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
