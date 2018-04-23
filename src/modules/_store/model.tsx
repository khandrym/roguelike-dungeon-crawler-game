import * as Redux from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from './reducer';
import Initials from '../_initials';
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

export interface State {
  player: Player.State;
  dungeons: Dungeons.State;
  locations: Locations.State;
  weapons: Weapons.State;
  medicines: Medicines.State;
  enemies: Enemies.State;
  dungeonMedicines: DungeonMedicines.State;
  dungeonWeapons: DungeonWeapons.State;
  dungeonEnemies: DungeonEnemies.State;
  dungeonGates: DungeonGates.State;
}

const store = Redux.createStore<State>(
  reducer,
  Initials,
  devToolsEnhancer({}));
export const getState = store.getState;
export const dispatch = store.dispatch;
export default store;
