import { DungeonGates } from './model';
import * as store from '../store';
import * as dungeonGate from '../dungeonGate';

export function getAllIds(state: store.State): string[] {
  return store.getDungeonGates(state).allIds;
}

export function getAll(state: store.State): DungeonGates {
  return store.getDungeonGates(state).byId;
}

export function getOne(state: store.State, id: string): dungeonGate.State {
  return getAll(state)[id];
}
