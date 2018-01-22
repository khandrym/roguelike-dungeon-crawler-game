import { Dungeons } from './model';
import * as store from '../store';
import * as dungeon from '../dungeon';

export function getDungeons(state: store.State): Dungeons {
  return store.selectors.getDungeons(state).byId;
}

export function getDungeon(state: store.State, id: string): dungeon.State {
  return getDungeons(state)[id];
}
