import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';
import * as Medicine from '../Medicine';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly medicine: Medicine.State;
  };
}

export function add(newMedicine: Medicine.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      medicine: newMedicine
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
