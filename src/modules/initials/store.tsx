import { State } from '../store/model';
import * as player from './player';
import * as dungeons from './dungeons';
import * as locations from './locations';
import * as weapons from './weapons';
import * as medicines from './medicines';
import * as enemies from './enemies';
import * as dungeonMedicines from './dungeonMedicines';
import * as dungeonWeapons from './dungeonWeapons';
import * as dungeonEnemies from './dungeonEnemies';
import * as dungeonGates from './dungeonGates';

const store: State = {
  player: player.hero,
  dungeons: dungeons.all,
  locations: locations.all,
  weapons: weapons.all,
  medicines: medicines.all,
  enemies: enemies.all,
  dungeonMedicines: dungeonMedicines.all,
  dungeonWeapons: dungeonWeapons.all,
  dungeonEnemies: dungeonEnemies.all,
  dungeonGates: dungeonGates.all
};

export default store;
