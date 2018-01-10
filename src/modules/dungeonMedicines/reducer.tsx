import { combineReducers } from 'redux';
import { DungeonMedicines } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addDungeonMedicineReducerById(state: DungeonMedicines, action: actions.Add): DungeonMedicines {
  const id = action.payload.dungeonMedicine.id;
  const dungeonMedicine = action.payload.dungeonMedicine;
  return {
    ...state,
    [id]: dungeonMedicine
  };
}

function addDungeonMedicineReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.dungeonMedicine.id;
  return state.concat(id);
}

function deleteDungeonMedicineReducerById(state: DungeonMedicines, action: actions.Delete): DungeonMedicines {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteDungeonMedicineReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: DungeonMedicines = {}, action: actions.Action): DungeonMedicines {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonMedicineReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonMedicineReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonMedicineReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonMedicineReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
