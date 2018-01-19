import { Medicines } from './model';
import * as store from '../store';
import * as medicine from '../medicine';

export function getMedicines(state: store.State): Medicines {
  return store.selectors.getMedicines(state).byId;
}

export function getMedicine(state: store.State, id: string): medicine.State {
  return getMedicines(state)[id];
}
