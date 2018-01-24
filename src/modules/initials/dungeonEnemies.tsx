import { State } from '../dungeonEnemies/model';
import * as dungeonEnemy from './dungeonEnemy';

export const all: State = {
  byId: {
    [dungeonEnemy.enemy1.id]: dungeonEnemy.enemy1,
    [dungeonEnemy.enemy2.id]: dungeonEnemy.enemy2
  },
  allIds: [
    dungeonEnemy.enemy1.id,
    dungeonEnemy.enemy2.id
  ]
};
