import { State, NAME } from '../_medicine';
import IdGenerator from '../_idGenerator';

export const water: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Water',
  health: 10
};

export const herb: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Herb',
  health: 20
};

export const potion: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Potion',
  health: 40
};
