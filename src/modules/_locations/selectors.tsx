import { Locations } from './model';
import * as Store from '../_store';
import * as Location from '../_location';

export function getAllIds(state: Store.State): string[] {
  return Store.getLocations(state).allIds;
}

export function getAll(state: Store.State): Locations {
  return Store.getLocations(state).byId;
}

export function getOne(state: Store.State, id: string): Location.State {
  return getAll(state)[id];
}
