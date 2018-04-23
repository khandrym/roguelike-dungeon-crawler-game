import { combineReducers } from 'redux';
import { DungeonGates } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addReducerById(state: DungeonGates, action: actions.Add): DungeonGates {
  const id = action.payload.dungeonGate.id;
  const newItem = action.payload.dungeonGate;
  return {
    ...state,
    [id]: newItem
  };
}

function addReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.dungeonGate.id;
  return state.concat(id);
}

function deleteReducerById(state: DungeonGates, action: actions.Delete): DungeonGates {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function delelteReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: DungeonGates = {}, action: actions.Action): DungeonGates {
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
      return delelteReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
