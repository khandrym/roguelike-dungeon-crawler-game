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
  [player.constants.NAME]: player.reducer,
  [dungeons.constants.NAME]: dungeons.reducer,
  [locations.constants.NAME]: locations.reducer,
  [weapons.constants.NAME]: weapons.reducer,
  [medicines.constants.NAME]: medicines.reducer,
  [enemies.constants.NAME]: enemies.reducer,
  [dungeonMedicines.constants.NAME]: dungeonMedicines.reducer,
  [dungeonWeapons.constants.NAME]: dungeonWeapons.reducer,
  [dungeonEnemies.constants.NAME]: dungeonEnemies.reducer,
  [dungeonGates.constants.NAME]: dungeonGates.reducer
});
