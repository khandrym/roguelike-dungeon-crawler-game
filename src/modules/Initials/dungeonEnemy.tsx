import { State, NAME } from '../DungeonEnemy';
import IdGenerator from '../IdGenerator';
import * as enemy from './enemy';
import * as location from './location';

export const enemy1: State = {
  id: IdGenerator.generateId(NAME),
  health: 100,
  experience: enemy.violentDrunkard.experience,
  enemyId: enemy.violentDrunkard.id,
  locationId: location.enemy1.id
};

export const enemy2: State = {
  id: IdGenerator.generateId(NAME),
  health: 100,
  enemyId: enemy.violentDrunkard.id,
  experience: enemy.violentDrunkard.experience,
  locationId: location.enemy2.id
};
