import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';

export interface MoveRight extends AnyAction {
  type: ActionTypes.MOVE_RIGHT;
  payload: {
  };
}

export function moveRight(id: string): MoveRight {
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

export function moveLeft(id: string): MoveLeft {
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

export function moveUp(id: string): MoveUp {
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

export function moveDown(id: string): MoveDown {
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
