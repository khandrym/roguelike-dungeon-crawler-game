import { DungeonEnemy, State } from './model';
import * as constants from './constants';
import * as enemies from '../enemies';
import * as locations from '../locations';
import idGenerator from '../idGenerator';

export const enemy1: DungeonEnemy = {
  id: idGenerator.generateId(constants.BASENAME),
  health: 100,
  enemyId: enemies.initials.violentDrunkard.id,
  locationId: locations.initials.enemy1.id
};

export const enemy2: DungeonEnemy = {
  id: idGenerator.generateId(constants.BASENAME),
  health: 100,
  enemyId: enemies.initials.violentDrunkard.id,
  locationId: locations.initials.enemy2.id
};

export const dungeonEnemies: State = {
  byId: {
    [enemy1.id]: enemy1,
    [enemy2.id]: enemy2
  },
  allIds: [
    enemy1.id,
    enemy2.id
  ]
};
