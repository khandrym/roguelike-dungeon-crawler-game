import { combineReducers } from 'redux';
import { DungeonWeapons } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addDungeonWeaponReducerById(state: DungeonWeapons, action: actions.Add): DungeonWeapons {
  const id = action.payload.dungeonWeapon.id;
  const dungeonWeapon = action.payload.dungeonWeapon;
  return {
    ...state,
    [id]: dungeonWeapon
  };
}

function addDungeonWeaponReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.dungeonWeapon.id;
  return state.concat(id);
}

function deleteDungeonWeaponReducerById(state: DungeonWeapons, action: actions.Delete): DungeonWeapons {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteDungeonWeaponReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: DungeonWeapons = {}, action: actions.Action): DungeonWeapons {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonWeaponReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonWeaponReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonWeaponReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonWeaponReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
