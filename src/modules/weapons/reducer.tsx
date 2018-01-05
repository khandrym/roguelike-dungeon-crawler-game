import { combineReducers } from 'redux';
import { Weapons } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addLocationReducerById(state: Weapons, action: actions.Add): Weapons {
  const id = action.payload.weapon.id;
  const location = action.payload.weapon;
  return {
    ...state,
    [id]: location
  };
}

function addLocationReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.weapon.id;
  return state.concat(id);
}

function deleteLocationReducerById(state: Weapons, action: actions.Delete): Weapons {
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

function reducerById(state: Weapons = {}, action: actions.Action): Weapons {
  switch (action.type) {
    case ActionTypes.ADD:
      return addLocationReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteLocationReducerById(state, action);
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
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
