import { State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';

export const gray: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Gray'
};

export const durk: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Durk'
};

export const black: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Black'
};
