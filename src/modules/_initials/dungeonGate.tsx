import { State, NAME } from '../_dungeonGate';
import IdGenerator from '../_idGenerator';
import * as location from './location';

export const gate1: State = {
  id: IdGenerator.generateId(NAME),
  locationIdFrom: location.gate1From.id,
  locationIdTo: location.gate1To.id
};

export const gate2: State = {
  id: IdGenerator.generateId(NAME),
  locationIdFrom: location.gate2From.id,
  locationIdTo: location.gate2To.id
};
