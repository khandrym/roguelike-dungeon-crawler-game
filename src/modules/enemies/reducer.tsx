import { combineReducers } from 'redux';
import { Enemies } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addEnemyReducerById(state: Enemies, action: actions.Add): Enemies {
  const id = action.payload.enemy.id;
  const enemy = action.payload.enemy;
  return {
    ...state,
    [id]: enemy
  };
}

function addEnemyReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.enemy.id;
  return state.concat(id);
}

function deleteEnemyReducerById(state: Enemies, action: actions.Delete): Enemies {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteEnemyReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: Enemies = {}, action: actions.Action): Enemies {
  switch (action.type) {
    case ActionTypes.ADD:
      return addEnemyReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteEnemyReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addEnemyReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteEnemyReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
