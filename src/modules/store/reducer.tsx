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
  [player.model.NAME]: player.reducer,
  [dungeons.model.NAME]: dungeons.reducer,
  [locations.model.NAME]: locations.reducer,
  [weapons.model.NAME]: weapons.reducer,
  [medicines.model.NAME]: medicines.reducer,
  [enemies.model.NAME]: enemies.reducer,
  [dungeonMedicines.model.NAME]: dungeonMedicines.reducer,
  [dungeonWeapons.model.NAME]: dungeonWeapons.reducer,
  [dungeonEnemies.model.NAME]: dungeonEnemies.reducer,
  [dungeonGates.model.NAME]: dungeonGates.reducer
});
