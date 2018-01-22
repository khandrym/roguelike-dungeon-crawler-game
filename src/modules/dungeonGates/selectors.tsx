import { DungeonGates } from './model';
import * as store from '../store';
import * as dungeonGate from '../dungeonGate';

export function getDungeonGates(state: store.State): DungeonGates {
  return store.selectors.getDungeonGates(state).byId;
}

export function getDungeonGate(state: store.State, id: string): dungeonGate.State {
  return getDungeonGates(state)[id];
}
