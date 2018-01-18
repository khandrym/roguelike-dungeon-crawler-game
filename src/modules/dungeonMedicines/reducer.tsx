import { combineReducers } from 'redux';
import { DungeonMedicines } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';
import * as dungeonMedicine from '../dungeonMedicine';

function addDungeonMedicineReducerById(state: DungeonMedicines, action: actions.Add): DungeonMedicines {
  const id = action.payload.dungeonMedicine.id;
  const newDungeonMedicine = action.payload.dungeonMedicine;
  return {
    ...state,
    [id]: newDungeonMedicine
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

function decreaseHealthReducerById(state: DungeonMedicines, action: actions.DecreaseHealth): DungeonMedicines {
  const id = action.payload.id;
  const value = action.payload.value;
  const modifiedDungeonMedicine = dungeonMedicine.reducer(state[id], dungeonMedicine.actions.decreaseHealth(value));
  return {
    ...state,
    [id]: modifiedDungeonMedicine
  };
}

function decreaseHealthReducerAllIds(state: string[], action: actions.DecreaseHealth): string[] {
  return state;
}

function reducerById(state: DungeonMedicines = {}, action: actions.Action): DungeonMedicines {
  switch (action.type) {
    case ActionTypes.ADD:
      return addDungeonMedicineReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteDungeonMedicineReducerById(state, action);
    case ActionTypes.DECREASE_HEALTH:
      return decreaseHealthReducerById(state, action);
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
    case ActionTypes.DECREASE_HEALTH:
      return decreaseHealthReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
