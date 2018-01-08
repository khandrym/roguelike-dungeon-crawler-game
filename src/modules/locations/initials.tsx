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

export const locations: State = {
  byId: {
    [playerLocation.id]: playerLocation
  },
  allIds: [
    playerLocation.id
  ]
};
