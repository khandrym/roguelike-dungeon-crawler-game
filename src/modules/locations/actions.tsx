import { AnyAction } from 'redux';
import { Location } from './model';
import { ActionTypes } from './actionTypes';

export interface Add extends AnyAction {
  type: ActionTypes.ADD;
  payload: {
    location: Location;
  };
}

export function add(location: Location): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      location: location
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

export interface Other extends AnyAction {
  type: ActionTypes.OTHER;
}

export type Action =
  | Add
  | Delete
  | Other;
