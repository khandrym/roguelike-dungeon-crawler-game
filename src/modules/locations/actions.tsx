import { AnyAction } from 'redux';
import * as location from '../location';
import ActionTypes from './actionTypes';

export interface Add extends AnyAction {
  type: ActionTypes.ADD;
  payload: {
    location: location.State;
  };
}

export function add(newLocation: location.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      location: newLocation
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

export interface MoveRight extends AnyAction {
  type: ActionTypes.MOVE_RIGHT;
  payload: {
    id: string;
  };
}

export function moveRight(id: string): MoveRight {
  return {
    type: ActionTypes.MOVE_RIGHT,
    payload: {
      id: id
    }
  };
}

export interface MoveLeft extends AnyAction {
  type: ActionTypes.MOVE_LEFT;
  payload: {
    id: string;
  };
}

export function moveLeft(id: string): MoveLeft {
  return {
    type: ActionTypes.MOVE_LEFT,
    payload: {
      id: id
    }
  };
}

export interface MoveUp extends AnyAction {
  type: ActionTypes.MOVE_UP;
  payload: {
    id: string;
  };
}

export function moveUp(id: string): MoveUp {
  return {
    type: ActionTypes.MOVE_UP,
    payload: {
      id: id
    }
  };
}

export interface MoveDown extends AnyAction {
  type: ActionTypes.MOVE_DOWN;
  payload: {
    id: string;
  };
}

export function moveDown(id: string): MoveDown {
  return {
    type: ActionTypes.MOVE_DOWN,
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
  | MoveRight
  | MoveLeft
  | MoveUp
  | MoveDown
  | Other;
