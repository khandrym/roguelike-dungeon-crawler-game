import { State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';

export const water: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Water',
  health: 10
};

export const herb: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Herb',
  health: 20
};

export const potion: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Potion',
  health: 40
};
