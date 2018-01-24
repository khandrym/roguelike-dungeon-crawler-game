import { State, NAME } from '../dungeon/model';
import idGenerator from '../idGenerator';

export const gray: State = {
  id: idGenerator.generateId(NAME),
  name: 'Gray'
};

export const durk: State = {
  id: idGenerator.generateId(NAME),
  name: 'Durk'
};

export const black: State = {
  id: idGenerator.generateId(NAME),
  name: 'Black'
};
