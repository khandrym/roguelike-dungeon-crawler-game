import * as dungeonMedicine from '../dungeonMedicine';
import * as medicine from './medicine';
import * as location from './location';
import idGenerator from '../idGenerator';

export const water1: dungeonMedicine.State = {
  id: idGenerator.generateId(dungeonMedicine.constants.NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water1.id
};

export const water2: dungeonMedicine.State = {
  id: idGenerator.generateId(dungeonMedicine.constants.NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water2.id
};

export const water3: dungeonMedicine.State = {
  id: idGenerator.generateId(dungeonMedicine.constants.NAME),
  health: medicine.water.health,
  medicineId: medicine.water.id,
  locationId: location.water3.id
};
