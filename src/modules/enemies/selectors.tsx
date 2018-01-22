import { Enemies } from './model';
import * as store from '../store';
import * as enemy from '../enemy';

export function getEnemies(state: store.State): Enemies {
  return store.selectors.getEnemies(state).byId;
}

export function getEnemy(state: store.State, id: string): enemy.State {
  return getEnemies(state)[id];
}
