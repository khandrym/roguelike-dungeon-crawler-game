import * as dungeonGate from '../dungeonGate';
import * as location from './location';
import idGenerator from '../idGenerator';

export const gate1: dungeonGate.State = {
  id: idGenerator.generateId(dungeonGate.constants.NAME),
  locationIdFrom: location.gate1From.id,
  locationIdTo: location.gate1To.id
};

export const gate2: dungeonGate.State = {
  id: idGenerator.generateId(dungeonGate.constants.NAME),
  locationIdFrom: location.gate2From.id,
  locationIdTo: location.gate2To.id
};
