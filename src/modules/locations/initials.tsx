import { State } from './model';
import * as location from '../location';
import * as constants from './constants';
import idGenerator from '../idGenerator';
import * as dungeons from '../dungeons';

export const player: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 15,
  y: 35
};

export const water1: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 20,
  y: 40
};

export const water2: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 25,
  y: 45
};

export const water3: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 30,
  y: 50
};

export const knife: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 10,
  y: 15
};

export const club: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 15,
  y: 10
};

export const enemy1: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 15,
  y: 0
};

export const enemy2: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 20,
  y: 5
};

export const gate1From: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 1,
  y: 1
};

export const gate1To: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.durk.id,
  x: 1,
  y: 1
};

export const gate2From: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.durk.id,
  x: 11,
  y: 11
};

export const gate2To: location.State = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.black.id,
  x: 12,
  y: 12
};

export const locations: State = {
  byId: {
    [player.id]: player,
    [water1.id]: water1,
    [water2.id]: water2,
    [water3.id]: water3,
    [knife.id]: knife,
    [club.id]: club,
    [enemy1.id]: enemy1,
    [enemy2.id]: enemy2,
    [gate1From.id]: gate1From,
    [gate1To.id]: gate1To,
    [gate2From.id]: gate2From,
    [gate2To.id]: gate2To
  },
  allIds: [
    player.id,
    water1.id,
    water2.id,
    water3.id,
    knife.id,
    club.id,
    enemy1.id,
    enemy2.id,
    gate1From.id,
    gate1To.id,
    gate2From.id,
    gate2To.id
  ]
};
