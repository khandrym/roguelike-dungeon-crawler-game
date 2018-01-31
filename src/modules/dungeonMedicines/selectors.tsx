import { DungeonMedicines } from './model';
import * as store from '../store';
import * as dungeonMedicine from '../dungeonMedicine';

export function getAllIds(state: store.State): string[] {
  return store.getDungeonMedicines(state).allIds;
}

export function getAll(state: store.State): DungeonMedicines {
  return store.getDungeonMedicines(state).byId;
}

export function getOne(state: store.State, id: string): dungeonMedicine.State {
  return getAll(state)[id];
}
