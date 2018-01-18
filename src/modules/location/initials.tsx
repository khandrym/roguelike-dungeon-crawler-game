import { State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';
import * as dungeon from '../dungeon';

export const player: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 15,
  y: 35
};

export const water1: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 20,
  y: 40
};

export const water2: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 25,
  y: 45
};

export const water3: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 30,
  y: 50
};

export const knife: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 10,
  y: 15
};

export const club: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 15,
  y: 10
};

export const enemy1: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 15,
  y: 0
};

export const enemy2: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 20,
  y: 5
};

export const gate1From: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.gray.id,
  x: 1,
  y: 1
};

export const gate1To: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.durk.id,
  x: 1,
  y: 1
};

export const gate2From: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.durk.id,
  x: 11,
  y: 11
};

export const gate2To: State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeon.initials.black.id,
  x: 12,
  y: 12
};
