import { combineReducers } from 'redux';
import * as player from '../player';
import * as locations from '../locations';
import * as weapons from '../weapons';

export default combineReducers({
  player: player.reducer,
  locations: locations.reducer,
  weapons: weapons.reducer
});
