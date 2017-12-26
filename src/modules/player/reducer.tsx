import { Player } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function increaseHealthReducer(state: Player, action: actions.IncreaseHealth): Player {
  return {
    name: state.name,
    health: state.health + action.payload.value,
    locationId: state.locationId
  };
}

function decreaseHealthReducer(state: Player, action: actions.DecreaseHealth): Player {
  return {
    name: state.name,
    health: state.health - action.payload.value,
    locationId: state.locationId
  };
}

export default (state: Player, action: actions.Action): Player => {
  switch (action.type) {
    case ActionTypes.INCREASE_HEALTH:
      return increaseHealthReducer(state, action);
    case ActionTypes.DECREASE_HEALTH:
      return decreaseHealthReducer(state, action);
    default:
      return state;
  }
}
