import * as medicine from '../medicine';

export const NAME = 'medicines';

export interface Medicines {
  [index: string]: medicine.State;
}

export interface State {
  byId: Medicines;
  allIds: string[];
}
