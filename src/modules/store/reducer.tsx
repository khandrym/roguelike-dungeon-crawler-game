import { combineReducers } from 'redux';
import * as player from '../player';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';

export default combineReducers({
  [player.constants.STORENAME]: player.reducer,
  [locations.constants.STORENAME]: locations.reducer,
  [weapons.constants.STORENAME]: weapons.reducer,
  [medicines.constants.STORENAME]: medicines.reducer
});
