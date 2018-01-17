import { AnyAction } from 'redux';
import ActionTypes from './actionTypes';

export interface MoveRight extends AnyAction {
  readonly type: ActionTypes.MOVE_RIGHT;
  readonly payload: {};
}

export function moveRight(): MoveRight {
  return {
    type: ActionTypes.MOVE_RIGHT,
    payload: {}
  };
}

export interface MoveLeft extends AnyAction {
  readonly type: ActionTypes.MOVE_LEFT;
  readonly payload: {};
}

export function moveLeft(): MoveLeft {
  return {
    type: ActionTypes.MOVE_LEFT,
    payload: {}
  };
}

export interface MoveUp extends AnyAction {
  readonly type: ActionTypes.MOVE_UP;
  readonly payload: {};
}

export function moveUp(): MoveUp {
  return {
    type: ActionTypes.MOVE_UP,
    payload: {}
  };
}

export interface MoveDown extends AnyAction {
  readonly type: ActionTypes.MOVE_DOWN;
  readonly payload: {};
}

export function moveDown(): MoveDown {
  return {
    type: ActionTypes.MOVE_DOWN,
    payload: {}
  };
}

interface Other extends AnyAction {
  readonly type: ActionTypes.OTHER;
  readonly payload: {};
}

export type Action =
  | MoveRight
  | MoveLeft
  | MoveUp
  | MoveDown
  | Other;
