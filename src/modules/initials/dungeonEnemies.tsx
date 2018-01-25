import { State } from '../dungeonEnemies';
import * as dungeonEnemy from './dungeonEnemy';

const dungeonEnemies: State = {
  byId: {
    [dungeonEnemy.enemy1.id]: dungeonEnemy.enemy1,
    [dungeonEnemy.enemy2.id]: dungeonEnemy.enemy2
  },
  allIds: [
    dungeonEnemy.enemy1.id,
    dungeonEnemy.enemy2.id
  ]
};

export default dungeonEnemies;
