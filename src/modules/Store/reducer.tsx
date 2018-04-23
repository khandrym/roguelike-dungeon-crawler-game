import { combineReducers } from 'redux';
import { State } from './model';
import * as Player from '../Player';
import * as Dungeons from '../Dungeons';
import * as Locations from '../Locations';
import * as Weapons from '../Weapons';
import * as Medicines from '../Medicines';
import * as Enemies from '../Enemies';
import * as DungeonMedicines from '../DungeonMedicines';
import * as DungeonWeapons from '../DungeonWeapons';
import * as DungeonEnemies from '../DungeonEnemies';
import * as DungeonGates from '../DungeonGates';

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
