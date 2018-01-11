import { combineReducers } from 'redux';
import * as player from '../player';
import * as dungeons from '../dungeons';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';
import * as enemies from '../enemies';
import * as dungeonMedicines from '../dungeonMedicines';
import * as dungeonWeapons from '../dungeonWeapons';
import * as dungeonEnemies from '../dungeonEnemies';
import * as dungeonGates from '../dungeonGates';

export default combineReducers({
  [player.constants.STORENAME]: player.reducer,
  [dungeons.constants.STORENAME]: dungeons.reducer,
  [locations.constants.STORENAME]: locations.reducer,
  [weapons.constants.STORENAME]: weapons.reducer,
  [medicines.constants.STORENAME]: medicines.reducer,
  [enemies.constants.STORENAME]: enemies.reducer,
  [dungeonMedicines.constants.STORENAME]: dungeonMedicines.reducer,
  [dungeonWeapons.constants.STORENAME]: dungeonWeapons.reducer,
  [dungeonEnemies.constants.STORENAME]: dungeonEnemies.reducer,
  [dungeonGates.constants.STORENAME]: dungeonGates.reducer
});
