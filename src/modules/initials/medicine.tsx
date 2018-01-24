import { State, NAME } from '../medicine/model';
import idGenerator from '../idGenerator';

export const water: State = {
  id: idGenerator.generateId(NAME),
  name: 'Water',
  health: 10
};

export const herb: State = {
  id: idGenerator.generateId(NAME),
  name: 'Herb',
  health: 20
};

export const potion: State = {
  id: idGenerator.generateId(NAME),
  name: 'Potion',
  health: 40
};
