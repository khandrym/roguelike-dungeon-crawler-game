import { State, NAME } from '../dungeonGate/model';
import * as location from './location';
import idGenerator from '../idGenerator';

export const gate1: State = {
  id: idGenerator.generateId(NAME),
  locationIdFrom: location.gate1From.id,
  locationIdTo: location.gate1To.id
};

export const gate2: State = {
  id: idGenerator.generateId(NAME),
  locationIdFrom: location.gate2From.id,
  locationIdTo: location.gate2To.id
};
