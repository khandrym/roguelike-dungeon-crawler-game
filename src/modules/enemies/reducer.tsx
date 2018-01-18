import { combineReducers } from 'redux';
import { Enemies } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addReducerById(state: Enemies, action: actions.Add): Enemies {
  const id = action.payload.enemy.id;
  const newItem = action.payload.enemy;
  return {
    ...state,
    [id]: newItem
  };
}

function addReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.enemy.id;
  return state.concat(id);
}

function deleteReducerById(state: Enemies, action: actions.Delete): Enemies {
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

function reducerById(state: Enemies = {}, action: actions.Action): Enemies {
  switch (action.type) {
    case ActionTypes.ADD:
      return addReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteReducerById(state, action);
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
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
