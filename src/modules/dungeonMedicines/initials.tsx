import { State } from './model';
import * as dungeonMedicine from '../dungeonMedicine';

export const dungeonMedicines: State = {
  byId: {
    [dungeonMedicine.initials.water1.id]: dungeonMedicine.initials.water1,
    [dungeonMedicine.initials.water2.id]: dungeonMedicine.initials.water2,
    [dungeonMedicine.initials.water3.id]: dungeonMedicine.initials.water3
  },
  allIds: [
    dungeonMedicine.initials.water1.id,
    dungeonMedicine.initials.water2.id,
    dungeonMedicine.initials.water3.id
  ]
};
