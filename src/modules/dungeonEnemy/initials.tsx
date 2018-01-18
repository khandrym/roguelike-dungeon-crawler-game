import { State } from './model';
import * as constants from './constants';
import * as enemy from '../enemy';
import * as location from '../location';
import idGenerator from '../idGenerator';

export const enemy1: State = {
  id: idGenerator.generateId(constants.NAME),
  health: 100,
  enemyId: enemy.initials.violentDrunkard.id,
  locationId: location.initials.enemy1.id
};

export const enemy2: State = {
  id: idGenerator.generateId(constants.NAME),
  health: 100,
  enemyId: enemy.initials.violentDrunkard.id,
  locationId: location.initials.enemy2.id
};
