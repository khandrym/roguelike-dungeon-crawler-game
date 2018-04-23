import * as Location from '../Location';

export const NAME = 'locations';

export interface Locations {
  [index: string]: Location.State;
}

export interface State {
  byId: Locations;
  allIds: string[];
}
