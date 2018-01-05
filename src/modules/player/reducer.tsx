import { State } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function increaseHealthReducer(state: State, action: actions.IncreaseHealth): State {
  return {
    name: state.name,
    health: state.health + action.payload.value,
    locationId: state.locationId,
    weaponId: state.weaponId
  };
}

function decreaseHealthReducer(state: State, action: actions.DecreaseHealth): State {
  return {
    name: state.name,
    health: state.health - action.payload.value,
    locationId: state.locationId,
    weaponId: state.weaponId
  };
}

const initialState: State = {
  name: '',
  health: 0,
  locationId: '',
  weaponId: ''
};

export default (state: State = initialState, action: actions.Action): State => {
  switch (action.type) {
    case ActionTypes.INCREASE_HEALTH:
      return increaseHealthReducer(state, action);
    case ActionTypes.DECREASE_HEALTH:
      return decreaseHealthReducer(state, action);
    default:
      return state;
  }
};
