import { State } from './model';
import * as medicine from '../medicine';

export const medicines: State = {
  byId: {
    [medicine.initials.water.id]: medicine.initials.water,
    [medicine.initials.herb.id]: medicine.initials.herb,
    [medicine.initials.potion.id]: medicine.initials.potion
  },
  allIds: [
    medicine.initials.water.id,
    medicine.initials.herb.id,
    medicine.initials.potion.id
  ]
};
