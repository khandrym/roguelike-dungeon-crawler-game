import { combineReducers } from 'redux';
import { State } from './model';
import * as Player from '../_player';
import * as Dungeons from '../_dungeons';
import * as Locations from '../_locations';
import * as Weapons from '../_weapons';
import * as Medicines from '../_medicines';
import * as Enemies from '../_enemies';
import * as DungeonMedicines from '../_dungeonMedicines';
import * as DungeonWeapons from '../_dungeonWeapons';
import * as DungeonEnemies from '../_dungeonEnemies';
import * as DungeonGates from '../_dungeonGates';

const reducer = combineReducers<State>({
  [Player.NAME]: Player.reducer,
  [Dungeons.NAME]: Dungeons.reducer,
  [Locations.NAME]: Locations.reducer,
  [Weapons.NAME]: Weapons.reducer,
  [Medicines.NAME]: Medicines.reducer,
  [Enemies.NAME]: Enemies.reducer,
  [DungeonMedicines.NAME]: DungeonMedicines.reducer,
  [DungeonWeapons.NAME]: DungeonWeapons.reducer,
  [DungeonEnemies.NAME]: DungeonEnemies.reducer,
  [DungeonGates.NAME]: DungeonGates.reducer
});

export default reducer;
