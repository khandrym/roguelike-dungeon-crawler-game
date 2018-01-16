import { State } from './model';
import * as actions from './actions';
import ActionTypes from './actionTypes';

function increaseHealthReducer(state: State, action: actions.IncreaseHealth): State {
  return {
    ...state,
    health: state.health + action.payload.value
  };
}

function decreaseHealthReducer(state: State, action: actions.DecreaseHealth): State {
  return {
    ...state,
    health: state.health - action.payload.value
  };
}

function increaseExperienceReducer(state: State, action: actions.IncreaseExperience): State {
  return {
    ...state,
    experience: state.experience + action.payload.value
  };
}

function decreaseExperienceReducer(state: State, action: actions.DecreaseExperience): State {
  return {
    ...state,
    experience: state.experience - action.payload.value
  };
}

const initialState: State = {
  name: '',
  health: 0,
  experience: 0,
  locationId: '',
  weaponId: ''
};

export default (state: State = initialState, action: actions.Action): State => {
  switch (action.type) {
    case ActionTypes.INCREASE_HEALTH:
      return increaseHealthReducer(state, action);
    case ActionTypes.DECREASE_HEALTH:
      return decreaseHealthReducer(state, action);
    case ActionTypes.INCREASE_EXPERIENCE:
      return increaseExperienceReducer(state, action);
    case ActionTypes.DECREASE_EXPERIENCE:
      return decreaseExperienceReducer(state, action);
    default:
      return state;
  }
};
