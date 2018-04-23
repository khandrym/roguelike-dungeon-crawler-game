import { State, NAME } from '../_dungeon';
import IdGenerator from '../_idGenerator';

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
