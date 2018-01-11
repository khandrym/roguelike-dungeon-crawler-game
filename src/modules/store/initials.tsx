import { State } from './model';
import * as player from '../player';
import * as dungeons from '../dungeons';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';
import * as enemies from '../enemies';
import * as dungeonMedicines from '../dungeonMedicines';
import * as dungeonWeapons from '../dungeonWeapons';

export const store: State = {
  player: player.initials.player,
  dungeons: dungeons.initials.dungeons,
  locations: locations.initials.locations,
  weapons: weapons.initials.weapons,
  medicines: medicines.initials.medicines,
  enemies: enemies.initials.medicines,
  dungeonMedicines: dungeonMedicines.initials.dungeonMedicines,
  dungeonWeapons: dungeonWeapons.initials.dungeonWeapons
};
