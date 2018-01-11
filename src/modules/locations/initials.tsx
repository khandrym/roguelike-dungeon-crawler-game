import { Location, State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';
import * as dungeons from '../dungeons';

export const playerLocation: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 15,
  y: 35
};

export const water1Location: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 20,
  y: 40
};

export const water2Location: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 25,
  y: 45
};

export const water3Location: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 30,
  y: 50
};

export const knife: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 10,
  y: 15
};

export const club: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 15,
  y: 10
};

export const enemy1: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 15,
  y: 0
};

export const enemy2: Location = {
  id: idGenerator.generateId(constants.BASENAME),
  dungeonId: dungeons.initials.gray.id,
  x: 20,
  y: 5
};

export const locations: State = {
  byId: {
    [playerLocation.id]: playerLocation,
    [water1Location.id]: water1Location,
    [water2Location.id]: water2Location,
    [water3Location.id]: water3Location,
    [knife.id]: knife,
    [club.id]: club,
    [enemy1.id]: enemy1,
    [enemy2.id]: enemy2
  },
  allIds: [
    playerLocation.id,
    water1Location.id,
    water2Location.id,
    water3Location.id,
    knife.id,
    club.id,
    enemy1.id,
    enemy2.id
  ]
};
