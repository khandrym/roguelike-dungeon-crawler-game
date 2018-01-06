import { combineReducers } from 'redux';
import { Medicines } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function addMedicineReducerById(state: Medicines, action: actions.Add): Medicines {
  const id = action.payload.medicine.id;
  const medicine = action.payload.medicine;
  return {
    ...state,
    [id]: medicine
  };
}

function addMedicineReducerAllIds(state: string[], action: actions.Add): string[] {
  const id = action.payload.medicine.id;
  return state.concat(id);
}

function deleteMedicineReducerById(state: Medicines, action: actions.Delete): Medicines {
  const id = action.payload.id;
  const newState = { ...state };
  delete newState[id];
  return newState;
}

function deleteLocationReducerAllIds(state: string[], action: actions.Delete): string[] {
  const id = action.payload.id;
  return state.filter((val) => {
    return val !== id;
  });
}

function reducerById(state: Medicines = {}, action: actions.Action): Medicines {
  switch (action.type) {
    case ActionTypes.ADD:
      return addMedicineReducerById(state, action);
    case ActionTypes.DELETE:
      return deleteMedicineReducerById(state, action);
    default:
      return state;
  }
}

function reducerAllIds(state: string[] = [], action: actions.Action): string[] {
  switch (action.type) {
    case ActionTypes.ADD:
      return addMedicineReducerAllIds(state, action);
    case ActionTypes.DELETE:
      return deleteLocationReducerAllIds(state, action);
    default:
      return state;
  }
}

export default combineReducers({
  byId: reducerById,
  allIds: reducerAllIds
});
