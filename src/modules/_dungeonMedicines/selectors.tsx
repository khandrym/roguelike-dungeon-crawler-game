import { DungeonMedicines } from './model';
import * as Store from '../_store';
import * as DungeonMedicine from '../_dungeonMedicine';

export function getAllIds(state: Store.State): string[] {
  return Store.getDungeonMedicines(state).allIds;
}

export function getAll(state: Store.State): DungeonMedicines {
  return Store.getDungeonMedicines(state).byId;
}

export function getOne(state: Store.State, id: string): DungeonMedicine.State {
  return getAll(state)[id];
}
