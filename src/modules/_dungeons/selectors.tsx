import { Dungeons } from './model';
import * as Store from '../_store';
import * as Dungeon from '../_dungeon';

export function getAllIds(state: Store.State): string[] {
  return Store.getDungeons(state).allIds;
}

export function getAll(state: Store.State): Dungeons {
  return Store.getDungeons(state).byId;
}

export function getOne(state: Store.State, id: string): Dungeon.State {
  return getAll(state)[id];
}
