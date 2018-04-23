import * as DungeonMedicine from '../DungeonMedicine';

export const NAME = 'dungeonMedicines';

export interface DungeonMedicines {
  [index: string]: DungeonMedicine.State;
}

export interface State {
  byId: DungeonMedicines;
  allIds: string[];
}
