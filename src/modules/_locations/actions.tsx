import { AnyAction } from 'redux';
import * as Location from '../_location';
import ActionTypes from './actionTypes';

export interface Add extends AnyAction {
  readonly type: ActionTypes.ADD;
  readonly payload: {
    readonly location: Location.State;
  };
}

export function add(newLocation: Location.State): Add {
  return {
    type: ActionTypes.ADD,
    payload: {
      location: newLocation
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

export interface MoveTo extends AnyAction {
  readonly type: ActionTypes.MOVE_TO;
  readonly payload: {
    readonly id: string;
    readonly moveToLocationId: string;
  };
}

export function moveTo(id: string, moveToLocationId: string): MoveTo {
  return {
    type: ActionTypes.MOVE_TO,
    payload: {
      id: id,
      moveToLocationId: moveToLocationId
    }
  };
}

export interface MoveRight extends AnyAction {
  readonly type: ActionTypes.MOVE_RIGHT;
  readonly payload: {
    readonly id: string;
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
  readonly type: ActionTypes.MOVE_LEFT;
  readonly payload: {
    readonly id: string;
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
  readonly type: ActionTypes.MOVE_UP;
  readonly payload: {
    readonly id: string;
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
  readonly type: ActionTypes.MOVE_DOWN;
  readonly payload: {
    readonly id: string;
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
  readonly type: ActionTypes.OTHER;
  readonly payload: {};
}

export type Action =
  | Add
  | Delete
  | MoveTo
  | MoveRight
  | MoveLeft
  | MoveUp
  | MoveDown
  | Other;
