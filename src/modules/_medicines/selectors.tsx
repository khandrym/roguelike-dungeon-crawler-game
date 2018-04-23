import { Medicines } from './model';
import * as Store from '../_store';
import * as Medicine from '../_medicine';

export function getAllIds(state: Store.State): string[] {
  return Store.getMedicines(state).allIds;
}

export function getAll(state: Store.State): Medicines {
  return Store.getMedicines(state).byId;
}

export function getOne(state: Store.State, id: string): Medicine.State {
  return getAll(state)[id];
}
