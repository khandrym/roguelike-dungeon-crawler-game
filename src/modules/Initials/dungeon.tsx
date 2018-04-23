import { State, NAME } from '../Dungeon';
import IdGenerator from '../IdGenerator';

export const gray: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Gray'
};

export const dark: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Dark'
};

export const black: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Black'
};
