import * as dungeonEnemy from '../dungeonEnemy';
import * as enemy from './enemy';
import * as location from './location';
import idGenerator from '../idGenerator';

export const enemy1: dungeonEnemy.State = {
  id: idGenerator.generateId(dungeonEnemy.constants.NAME),
  health: 100,
  enemyId: enemy.violentDrunkard.id,
  locationId: location.enemy1.id
};

export const enemy2: dungeonEnemy.State = {
  id: idGenerator.generateId(dungeonEnemy.constants.NAME),
  health: 100,
  enemyId: enemy.violentDrunkard.id,
  locationId: location.enemy2.id
};
