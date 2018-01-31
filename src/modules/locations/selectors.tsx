import { Locations } from './model';
import * as store from '../store';
import * as location from '../location';

export function getAllIds(state: store.State): string[] {
  return store.getLocations(state).allIds;
}

export function getAll(state: store.State): Locations {
  return store.getLocations(state).byId;
}

export function getOne(state: store.State, id: string): location.State {
  return getAll(state)[id];
}
