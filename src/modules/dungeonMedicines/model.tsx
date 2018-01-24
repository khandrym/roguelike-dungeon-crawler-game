import * as dungeonMedicine from '../dungeonMedicine';

export const NAME = 'dungeonMedicines';

export interface DungeonMedicines {
  [index: string]: dungeonMedicine.State;
}

export interface State {
  byId: DungeonMedicines;
  allIds: string[];
}
