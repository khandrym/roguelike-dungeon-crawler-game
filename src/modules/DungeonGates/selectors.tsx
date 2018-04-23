import { DungeonGates } from './model';
import * as Store from '../Store';
import * as DungeonGate from '../DungeonGate';

export function getAllIds(state: Store.State): string[] {
  return Store.getDungeonGates(state).allIds;
}

export function getAll(state: Store.State): DungeonGates {
  return Store.getDungeonGates(state).byId;
}

export function getOne(state: Store.State, id: string): DungeonGate.State {
  return getAll(state)[id];
}
