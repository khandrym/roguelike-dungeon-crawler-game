import * as location from '../location';

export const NAME = 'locations';

export interface Locations {
  [index: string]: location.State;
}

export interface State {
  byId: Locations;
  allIds: string[];
}
