import { State } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function decreaseHealthReducer(state: State, action: actions.DecreaseHealth): State {
  return {
    ...state,
    health: state.health - action.payload.value
  };
}

export default (state: State, action: actions.Action): State => {
  switch (action.type) {
    case ActionTypes.DECREASE_HEALTH:
      return decreaseHealthReducer(state, action);
    default:
      return state;
  }
};
