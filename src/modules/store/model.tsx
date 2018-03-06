import * as Redux from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import reducer from './reducer';
import initials from '../initials';
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

export interface State {
  player: player.State;
  dungeons: dungeons.State;
  locations: locations.State;
  weapons: weapons.State;
  medicines: medicines.State;
  enemies: enemies.State;
  dungeonMedicines: dungeonMedicines.State;
  dungeonWeapons: dungeonWeapons.State;
  dungeonEnemies: dungeonEnemies.State;
  dungeonGates: dungeonGates.State;
}

export const entity = Redux.createStore<State>(
  reducer,
  initials,
  devToolsEnhancer({}));
export const getState = entity.getState;
export const dispatch = entity.dispatch;
