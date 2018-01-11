import { combineReducers } from 'redux';
import { DungeonEnemies } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addDungeonEnemyReducerById(state: DungeonEnemies, action: actions.Add): DungeonEnemies {
  const id = action.payload.dungeonEnemy.id;
  const dungeonEnemy = action.payload.dungeonEnemy;
  return {
    ...state,
    [id]: dungeonEnemy
  };
}

function addDungeonEnemyReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.dungeonEnemy.id;
  return state.concat(id);
}

function deleteDungeonEnemyReducerById(state: DungeonEnemies, action: actions.Delete): DungeonEnemies {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteDungeonEnemyReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: DungeonEnemies = {}, action: actions.Action): DungeonEnemies {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonEnemyReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonEnemyReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonEnemyReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonEnemyReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
