import { State } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function setReducer(state: State, action: actions.Set): State {
  const location = action.payload.location;
  return {
    ...state,
    dungeonId: location.dungeonId,
    x: location.x,
    y: location.y
  }
}

function moveRightReducer(state: State, action: actions.MoveRight): State {
  return {
    ...state,
    x: state.x + 1
  };
}

function moveLeftReducer(state: State, action: actions.MoveLeft): State {
  return {
    ...state,
    x: state.x - 1
  };
}

function moveUpReducer(state: State, action: actions.MoveUp): State {
  return {
    ...state,
    y: state.y - 1
  };
}

function moveDownReducer(state: State, action: actions.MoveDown): State {
  return {
    ...state,
    y: state.y + 1
  };
}

export default (state: State, action: actions.Action): State => {
  switch (action.type) {
    case ActionTypes.SET:
      return setReducer(state, action);
    case ActionTypes.MOVE_RIGHT:
      return moveRightReducer(state, action);
    case ActionTypes.MOVE_LEFT:
      return moveLeftReducer(state, action);
    case ActionTypes.MOVE_UP:
      return moveUpReducer(state, action);
    case ActionTypes.MOVE_DOWN:
      return moveDownReducer(state, action);
    default:
      return state;
  }
};
