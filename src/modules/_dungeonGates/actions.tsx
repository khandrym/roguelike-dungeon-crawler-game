import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as DungeonGate from '../_dungeonGate';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly dungeonGate: DungeonGate.State;
  };
}

export function add(newDungeonGate: DungeonGate.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeonGate: newDungeonGate
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
