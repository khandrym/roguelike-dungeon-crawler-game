import { Locations } from './model';
import * as store from '../store';
import * as location from '../location';

export function getLocations(state: store.State): Locations {
  return store.getLocations(state).byId;
}

export function getLocation(state: store.State, id: string): location.State {
  return getLocations(state)[id];
}
