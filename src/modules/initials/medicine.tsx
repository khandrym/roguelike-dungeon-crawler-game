import * as medicine from '../medicine';
import idGenerator from '../idGenerator';

export const water: medicine.State = {
  id: idGenerator.generateId(medicine.constants.NAME),
  name: 'Water',
  health: 10
};

export const herb: medicine.State = {
  id: idGenerator.generateId(medicine.constants.NAME),
  name: 'Herb',
  health: 20
};

export const potion: medicine.State = {
  id: idGenerator.generateId(medicine.constants.NAME),
  name: 'Potion',
  health: 40
};
