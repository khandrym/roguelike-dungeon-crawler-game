import * as dungeonMedicines from '../dungeonMedicines';
import * as dungeonMedicine from './dungeonMedicine';

export const all: dungeonMedicines.State = {
  byId: {
    [dungeonMedicine.water1.id]: dungeonMedicine.water1,
    [dungeonMedicine.water2.id]: dungeonMedicine.water2,
    [dungeonMedicine.water3.id]: dungeonMedicine.water3
  },
  allIds: [
    dungeonMedicine.water1.id,
    dungeonMedicine.water2.id,
    dungeonMedicine.water3.id
  ]
};
