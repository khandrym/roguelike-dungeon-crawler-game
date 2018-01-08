import { combineReducers } from 'redux';
import { Locations } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addLocationReducerById(state: Locations, action: actions.Add): Locations {
  const id = action.payload.location.id;
  const location = action.payload.location;
  return {
    ...state,
    [id]: location
  };
}

function addLocationReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.location.id;
  return state.concat(id);
}

function deleteLocationReducerById(state: Locations, action: actions.Delete): Locations {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteLocationReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function moveRightReducerById(state: Locations, action: actions.MoveRight): Locations {
  const id = action.payload.id;
  const location = {
    id: id,
    dungeonId: state[id].dungeonId,
    x: state[id].x + 1,
    y: state[id].y
  };
  return {
    ...state,
    [id]: location
  };
}

function moveRightReducerAllIds(state: string[], action: actions.MoveRight): string[] {
  return state;
}

function moveLeftReducerById(state: Locations, action: actions.MoveLeft): Locations {
  const id = action.payload.id;
  const location = {
    id: id,
    dungeonId: state[id].dungeonId,
    x: state[id].x - 1,
    y: state[id].y
  };
  return {
    ...state,
    [id]: location
  };
}

function moveLeftReducerAllIds(state: string[], action: actions.MoveLeft): string[] {
  return state;
}

function moveUpReducerById(state: Locations, action: actions.MoveUp): Locations {
  const id = action.payload.id;
  const location = {
    id: id,
    dungeonId: state[id].dungeonId,
    x: state[id].x,
    y: state[id].y + 1
  };
  return {
    ...state,
    [id]: location
  };
}

function moveUpReducerAllIds(state: string[], action: actions.MoveUp): string[] {
  return state;
}

function moveDownReducerById(state: Locations, action: actions.MoveDown): Locations {
  const id = action.payload.id;
  const location = {
    id: id,
    dungeonId: state[id].dungeonId,
    x: state[id].x,
    y: state[id].y - 1
  };
  return {
    ...state,
    [id]: location
  };
}

function moveDownReducerAllIds(state: string[], action: actions.MoveDown): string[] {
  return state;
}

function reducerById(state: Locations = {}, action: actions.Action): Locations {
  switch (action.type) {
    case ActionTypes.ADD:
      return addLocationReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteLocationReducerById(state, action);
    case ActionTypes.MOVE_RIGHT:
      return moveRightReducerById(state, action);
    case ActionTypes.MOVE_LEFT:
      return moveLeftReducerById(state, action);
    case ActionTypes.MOVE_UP:
      return moveUpReducerById(state, action);
    case ActionTypes.MOVE_DOWN:
      return moveDownReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addLocationReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteLocationReducerAllIds(state, action);
    case ActionTypes.MOVE_RIGHT:
      return moveRightReducerAllIds(state, action);
    case ActionTypes.MOVE_LEFT:
      return moveLeftReducerAllIds(state, action);
    case ActionTypes.MOVE_UP:
      return moveUpReducerAllIds(state, action);
    case ActionTypes.MOVE_DOWN:
      return moveDownReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
