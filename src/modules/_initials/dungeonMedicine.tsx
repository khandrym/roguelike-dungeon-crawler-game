import { State, NAME } from '../_dungeonMedicine';
import IdGenerator from '../_idGenerator';
import * as medicine from './medicine';
import * as location from './location';

export const water1: State = {
  id: IdGenerator.generateId(NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water1.id
};

export const water2: State = {
  id: IdGenerator.generateId(NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water2.id
};

export const water3: State = {
  id: IdGenerator.generateId(NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water3.id
};
