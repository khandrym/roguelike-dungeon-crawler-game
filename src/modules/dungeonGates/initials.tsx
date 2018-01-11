import { DungeonGate, State } from './model';
import * as constants from './constants';
import * as locations from '../locations';
import idGenerator from '../idGenerator';

export const gate1: DungeonGate = {
  id: idGenerator.generateId(constants.BASENAME),
  locationIdFrom: locations.initials.gate1From.id,
  locationIdTo: locations.initials.gate1To.id
};

export const gate2: DungeonGate = {
  id: idGenerator.generateId(constants.BASENAME),
  locationIdFrom: locations.initials.gate2From.id,
  locationIdTo: locations.initials.gate2To.id
};

export const dungeonGates: State = {
  byId: {
    [gate1.id]: gate1,
    [gate2.id]: gate2
  },
  allIds: [
    gate1.id,
    gate2.id
  ]
};
