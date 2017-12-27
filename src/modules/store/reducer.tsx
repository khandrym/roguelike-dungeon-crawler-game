import { combineReducers } from 'redux';
import * as player from '../player';
import * as locations from '../locations';

export default combineReducers({
  player: player.reducer,
  locations: locations.reducer
});
