import { AnyAction } from 'redux';
import { DungeonGate } from './model';
import ActionTypes from './actionTypes';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly dungeonGate: DungeonGate;
  };
}

export function add(dungeonGate: DungeonGate): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      dungeonGate: dungeonGate
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
