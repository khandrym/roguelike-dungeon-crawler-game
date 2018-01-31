import { Medicines } from './model';
import * as store from '../store';
import * as medicine from '../medicine';

export function getAllIds(state: store.State): string[] {
  return store.getMedicines(state).allIds;
}

export function getAll(state: store.State): Medicines {
  return store.getMedicines(state).byId;
}

export function getOne(state: store.State, id: string): medicine.State {
  return getAll(state)[id];
}
