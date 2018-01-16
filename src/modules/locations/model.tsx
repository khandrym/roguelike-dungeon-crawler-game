import * as location from '../location';

export interface Locations {
  [index: string]: location.State;
}

export interface State {
  byId: Locations;
  allIds: string[];
}
