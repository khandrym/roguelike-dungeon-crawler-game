import { DungeonMedicines } from './model';
import * as store from '../store';
import * as dungeonMedicine from '../dungeonMedicine';

export function getDungeonMedicines(state: store.State): DungeonMedicines {
  return store.getDungeonMedicines(state).byId;
}

export function getDungeonMedicine(state: store.State, id: string): dungeonMedicine.State {
  return getDungeonMedicines(state)[id];
}
