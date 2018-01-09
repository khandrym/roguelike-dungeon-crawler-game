import { combineReducers } from 'redux';
import * as player from '../player';
import * as dungeons from '../dungeons';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';

export default combineReducers({
  [player.constants.STORENAME]: player.reducer,
  [dungeons.constants.STORENAME]: dungeons.reducer,
  [locations.constants.STORENAME]: locations.reducer,
  [weapons.constants.STORENAME]: weapons.reducer,
  [medicines.constants.STORENAME]: medicines.reducer
});
