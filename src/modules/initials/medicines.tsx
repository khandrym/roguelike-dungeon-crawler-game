import { State } from '../medicines';
import * as medicine from './medicine';

const medicines: State = {
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

export default medicines;
