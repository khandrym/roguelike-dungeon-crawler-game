import { State, NAME } from '../Medicine';
import IdGenerator from '../IdGenerator';

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
