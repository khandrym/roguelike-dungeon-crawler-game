import * as Redux from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from './reducer';
import Initials from '../Initials';
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
