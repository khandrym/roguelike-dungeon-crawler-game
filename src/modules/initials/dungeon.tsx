import * as dungeon from '../dungeon';
import idGenerator from '../idGenerator';

export const gray: dungeon.State = {
  id: idGenerator.generateId(dungeon.constants.NAME),
  name: 'Gray'
};

export const durk: dungeon.State = {
  id: idGenerator.generateId(dungeon.constants.NAME),
  name: 'Durk'
};

export const black: dungeon.State = {
  id: idGenerator.generateId(dungeon.constants.NAME),
  name: 'Black'
};
