import { State } from '../store/model';
import player from './player';
import dungeons from './dungeons';
import locations from './locations';
import weapons from './weapons';
import medicines from './medicines';
import enemies from './enemies';
import dungeonMedicines from './dungeonMedicines';
import dungeonWeapons from './dungeonWeapons';
import dungeonEnemies from './dungeonEnemies';
import dungeonGates from './dungeonGates';

const store: State = {
  player: player,
  dungeons: dungeons,
  locations: locations,
  weapons: weapons,
  medicines: medicines,
  enemies: enemies,
  dungeonMedicines: dungeonMedicines,
  dungeonWeapons: dungeonWeapons,
  dungeonEnemies: dungeonEnemies,
  dungeonGates: dungeonGates
};

export default store;
