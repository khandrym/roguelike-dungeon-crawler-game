import { Dungeon, State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';

export const gray: Dungeon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Gray'
};

export const durk: Dungeon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Durk'
};

export const black: Dungeon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Black'
};

export const medicines: State = {
  byId: {
    [gray.id]: gray,
    [durk.id]: durk,
    [black.id]: black
  },
  allIds: [
    gray.id,
    durk.id,
    black.id
  ]
};
