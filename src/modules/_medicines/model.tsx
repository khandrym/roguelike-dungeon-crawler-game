import * as Medicine from '../_medicine';

export const NAME = 'medicines';

export interface Medicines {
  [index: string]: Medicine.State;
}

export interface State {
  byId: Medicines;
  allIds: string[];
}
