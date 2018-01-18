import * as dungeonMedicine from '../dungeonMedicine';

export interface DungeonMedicines {
  [index: string]: dungeonMedicine.State;
}

export interface State {
  byId: DungeonMedicines;
  allIds: string[];
}
