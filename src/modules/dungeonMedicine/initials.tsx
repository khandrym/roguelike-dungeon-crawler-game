import { State } from './model';
import * as constants from './constants';
import * as medicines from '../medicines';
import * as location from '../location';
import idGenerator from '../idGenerator';

export const water1: State = {
  id: idGenerator.generateId(constants.BASENAME),
  health: medicines.initials.water.health,
  medicineId: medicines.initials.water.id,
  locationId: location.initials.water1.id
};

export const water2: State = {
  id: idGenerator.generateId(constants.BASENAME),
  health: medicines.initials.water.health,
  medicineId: medicines.initials.water.id,
  locationId: location.initials.water2.id
};

export const water3: State = {
  id: idGenerator.generateId(constants.BASENAME),
  health: medicines.initials.water.health,
  medicineId: medicines.initials.water.id,
  locationId: location.initials.water3.id
};
