import { combineReducers } from 'redux';
import { DungeonEnemies } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addReducerById(state: DungeonEnemies, action: actions.Add): DungeonEnemies {
  const id = action.payload.dungeonEnemy.id;
  const newItem = action.payload.dungeonEnemy;
  return {
    ...state,
    [id]: newItem
  };
}

function addReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.dungeonEnemy.id;
  return state.concat(id);
}

function deleteReducerById(state: DungeonEnemies, action: actions.Delete): DungeonEnemies {
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

function reducerById(state: DungeonEnemies = {}, action: actions.Action): DungeonEnemies {
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
