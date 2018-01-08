import { combineReducers } from 'redux';
import { Dungeons } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addDungeonReducerById(state: Dungeons, action: actions.Add): Dungeons {
  const id = action.payload.dungeon.id;
  const medicine = action.payload.dungeon;
  return {
    ...state,
    [id]: medicine
  };
}

function addDungeonReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.dungeon.id;
  return state.concat(id);
}

function deleteDungeonReducerById(state: Dungeons, action: actions.Delete): Dungeons {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteDungeonReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: Dungeons = {}, action: actions.Action): Dungeons {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
