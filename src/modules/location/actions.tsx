import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';

export interface MoveRight extends AnyAction {
  type: ActionTypes.MOVE_RIGHT;
  payload: {
  };
}

export function moveRight(): MoveRight {
  return {
    type: ActionTypes.MOVE_RIGHT,
    payload: {
    }
  };
}

export interface MoveLeft extends AnyAction {
  type: ActionTypes.MOVE_LEFT;
  payload: {
  };
}

export function moveLeft(): MoveLeft {
  return {
    type: ActionTypes.MOVE_LEFT,
    payload: {
    }
  };
}

export interface MoveUp extends AnyAction {
  type: ActionTypes.MOVE_UP;
  payload: {
  };
}

export function moveUp(): MoveUp {
  return {
    type: ActionTypes.MOVE_UP,
    payload: {
    }
  };
}

export interface MoveDown extends AnyAction {
  type: ActionTypes.MOVE_DOWN;
  payload: {
  };
}

export function moveDown(): MoveDown {
  return {
    type: ActionTypes.MOVE_DOWN,
    payload: {
    }
  };
}

interface Other extends AnyAction {
  type: ActionTypes.OTHER;
}

export type Action =
  | MoveRight
  | MoveLeft
  | MoveUp
  | MoveDown
  | Other;
