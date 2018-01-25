import { State, NAME } from '../dungeonMedicine';
import idGenerator from '../idGenerator';
import * as medicine from './medicine';
import * as location from './location';

export const water1: State = {
  id: idGenerator.generateId(NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water1.id
};

export const water2: State = {
  id: idGenerator.generateId(NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water2.id
};

export const water3: State = {
  id: idGenerator.generateId(NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water3.id
};
