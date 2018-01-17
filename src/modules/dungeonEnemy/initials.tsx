import { State } from './model';
import * as constants from './constants';
import * as enemies from '../enemies';
import * as locations from '../locations';
import idGenerator from '../idGenerator';

export const enemy1: State = {
  id: idGenerator.generateId(constants.BASENAME),
  health: 100,
  enemyId: enemies.initials.violentDrunkard.id,
  locationId: locations.initials.enemy1.id
};

export const enemy2: State = {
  id: idGenerator.generateId(constants.BASENAME),
  health: 100,
  enemyId: enemies.initials.violentDrunkard.id,
  locationId: locations.initials.enemy2.id
};
