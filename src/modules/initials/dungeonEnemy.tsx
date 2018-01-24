import { State, NAME } from '../dungeonEnemy/model';
import * as enemy from './enemy';
import * as location from './location';
import idGenerator from '../idGenerator';

export const enemy1: State = {
  id: idGenerator.generateId(NAME),
  health: 100,
  enemyId: enemy.violentDrunkard.id,
  locationId: location.enemy1.id
};

export const enemy2: State = {
  id: idGenerator.generateId(NAME),
  health: 100,
  enemyId: enemy.violentDrunkard.id,
  locationId: location.enemy2.id
};
