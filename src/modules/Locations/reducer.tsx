import { combineReducers } from 'redux';
import { Locations } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';
import * as Location from '../Location';

function addReducerById(state: Locations, action: actions.Add): Locations {
  const id = action.payload.location.id;
  const newItem = action.payload.location;
  return {
    ...state,
    [id]: newItem
  };
}

function addReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.location.id;
  return state.concat(id);
}

function deleteReducerById(state: Locations, action: actions.Delete): Locations {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function moveToReducerById(state: Locations, action: actions.MoveTo): Locations {
  const id = action.payload.id;
  const newLocation = Location.reducer(
    state[id],
    Location.set(state[action.payload.moveToLocationId]));
  return {
    ...state,
    [id]: newLocation
  };
}

function moveToReducerAllIds(state: string[], action: actions.MoveTo): string[] {
  return state;
}

function moveRightReducerById(state: Locations, action: actions.MoveRight): Locations {
  const id = action.payload.id;
  const movedLocation = Location.reducer(state[id], Location.moveRight());
  return {
    ...state,
    [id]: movedLocation
  };
}

function moveRightReducerAllIds(state: string[], action: actions.MoveRight): string[] {
  return state;
}

function moveLeftReducerById(state: Locations, action: actions.MoveLeft): Locations {
  const id = action.payload.id;
  const movedLocation = Location.reducer(state[id], Location.moveLeft());
  return {
    ...state,
    [id]: movedLocation
  };
}

function moveLeftReducerAllIds(state: string[], action: actions.MoveLeft): string[] {
  return state;
}

function moveUpReducerById(state: Locations, action: actions.MoveUp): Locations {
  const id = action.payload.id;
  const movedLocation = Location.reducer(state[id], Location.moveUp());
  return {
    ...state,
    [id]: movedLocation
  };
}

function moveUpReducerAllIds(state: string[], action: actions.MoveUp): string[] {
  return state;
}

function moveDownReducerById(state: Locations, action: actions.MoveDown): Locations {
  const id = action.payload.id;
  const movedLocation = Location.reducer(state[id], Location.moveDown());
  return {
    ...state,
    [id]: movedLocation
  };
}

function moveDownReducerAllIds(state: string[], action: actions.MoveDown): string[] {
  return state;
}

function reducerById(state: Locations = {}, action: actions.Action): Locations {
  switch (action.type) {
    case ActionTypes.ADD:
      return addReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteReducerById(state, action);
    case ActionTypes.MOVE_TO:
      return moveToReducerById(state, action);
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
      return addReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteReducerAllIds(state, action);
    case ActionTypes.MOVE_TO:
      return moveToReducerAllIds(state, action);
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
