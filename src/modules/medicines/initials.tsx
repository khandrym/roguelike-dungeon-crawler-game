import { Medicine, State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';

export const water: Medicine = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Water',
  health: 10
};

export const herb: Medicine = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Herb',
  health: 20
};

export const potion: Medicine = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Potion',
  health: 40
};

export const medicines: State = {
  byId: {
    [water.id]: water,
    [herb.id]: herb,
    [potion.id]: potion
  },
  allIds: [
    water.id,
    herb.id,
    potion.id
  ]
};
