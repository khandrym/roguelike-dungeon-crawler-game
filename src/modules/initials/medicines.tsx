import * as medicines from '../medicines';
import * as medicine from './medicine';

export const all: medicines.State = {
  byId: {
    [medicine.water.id]: medicine.water,
    [medicine.herb.id]: medicine.herb,
    [medicine.potion.id]: medicine.potion
  },
  allIds: [
    medicine.water.id,
    medicine.herb.id,
    medicine.potion.id
  ]
};
