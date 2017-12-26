import { combineReducers } from 'redux';
import { Locations } from './model';
import * as actions from './actions';
import { ActionTypes } from './actionTypes'

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

function reducerById(state: Locations, action: actions.Action): Locations {
  switch (action.type) {
    case ActionTypes.ADD:
      return addLocationReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteLocationReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addLocationReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteLocationReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
