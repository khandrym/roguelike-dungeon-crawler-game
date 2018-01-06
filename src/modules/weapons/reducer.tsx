import { combineReducers } from 'redux';
import { Weapons } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addWeaponReducerById(state: Weapons, action: actions.Add): Weapons {
  const id = action.payload.weapon.id;
  const weapon = action.payload.weapon;
  return {
    ...state,
    [id]: weapon
  };
}

function addWeaponReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.weapon.id;
  return state.concat(id);
}

function deleteWeaponReducerById(state: Weapons, action: actions.Delete): Weapons {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteWeaponReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: Weapons = {}, action: actions.Action): Weapons {
  switch (action.type) {
    case ActionTypes.ADD:
      return addWeaponReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteWeaponReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addWeaponReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteWeaponReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
