import { DungeonMedicine, State } from './model';
import * as constants from './constants';
import * as medicines from '../medicines';
import * as locations from '../locations';
import idGenerator from '../idGenerator';

export const water1: DungeonMedicine = {
  id: idGenerator.generateId(constants.BASENAME),
  health: medicines.initials.water.health,
  medicineId: medicines.initials.water.id,
  locationId: locations.initials.water1.id
};

export const water2: DungeonMedicine = {
  id: idGenerator.generateId(constants.BASENAME),
  health: medicines.initials.water.health,
  medicineId: medicines.initials.water.id,
  locationId: locations.initials.water2.id
};

export const water3: DungeonMedicine = {
  id: idGenerator.generateId(constants.BASENAME),
  health: medicines.initials.water.health,
  medicineId: medicines.initials.water.id,
  locationId: locations.initials.water3.id
};

export const dungeonMedicines: State = {
  byId: {
    [water1.id]: water1,
    [water2.id]: water2,
    [water3.id]: water3
  },
  allIds: [
    water1.id,
    water2.id,
    water3.id
  ]
};
