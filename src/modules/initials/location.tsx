import * as location from '../location';
import idGenerator from '../idGenerator';
import * as dungeon from './dungeon';

export const player: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 15,
  y: 35
};

export const water1: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 20,
  y: 40
};

export const water2: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 25,
  y: 45
};

export const water3: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 30,
  y: 50
};

export const knife: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 10,
  y: 15
};

export const club: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 15,
  y: 10
};

export const enemy1: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 15,
  y: 0
};

export const enemy2: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 20,
  y: 5
};

export const gate1From: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.gray.id,
  x: 1,
  y: 1
};

export const gate1To: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.durk.id,
  x: 1,
  y: 1
};

export const gate2From: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.durk.id,
  x: 11,
  y: 11
};

export const gate2To: location.State = {
  id: idGenerator.generateId(location.constants.NAME),
  dungeonId: dungeon.black.id,
  x: 12,
  y: 12
};
