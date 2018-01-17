import { State } from './model';
import * as dungeonEnemy from '../dungeonEnemy';

export const dungeonEnemies: State = {
  byId: {
    [dungeonEnemy.initials.enemy1.id]: dungeonEnemy.initials.enemy1,
    [dungeonEnemy.initials.enemy2.id]: dungeonEnemy.initials.enemy2
  },
  allIds: [
    dungeonEnemy.initials.enemy1.id,
    dungeonEnemy.initials.enemy2.id
  ]
};
