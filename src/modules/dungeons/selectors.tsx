import { Dungeons } from './model';
import * as store from '../store';
import * as dungeon from '../dungeon';

export function getAllIds(state: store.State): string[] {
  return store.getDungeons(state).allIds;
}

export function getAll(state: store.State): Dungeons {
  return store.getDungeons(state).byId;
}

export function getOne(state: store.State, id: string): dungeon.State {
  return getAll(state)[id];
}
