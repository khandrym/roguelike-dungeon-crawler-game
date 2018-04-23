import { combineReducers } from 'redux';
import { Dungeons } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addById(state: Dungeons, action: actions.Add): Dungeons {
  const id = action.payload.dungeon.id;
  const newItem = action.payload.dungeon;
  return {
    ...state,
    [id]: newItem
  };
}

function addAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.dungeon.id;
  return state.concat(id);
}

function deleteById(state: Dungeons, action: actions.Delete): Dungeons {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: Dungeons = {}, action: actions.Action): Dungeons {
  switch (action.type) {
    case ActionTypes.ADD:
      return addById(state, action);
    case ActionTypes.DELETE:
      return deleteById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
