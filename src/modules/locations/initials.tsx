import { Location, State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';

export const playerLocation: Location = {
  id: idGenerator.generateId(constants.BASENAME),
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
