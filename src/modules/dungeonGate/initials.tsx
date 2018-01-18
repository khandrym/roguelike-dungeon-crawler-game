import { State } from './model';
import * as constants from './constants';
import * as location from '../location';
import idGenerator from '../idGenerator';

export const gate1: State = {
  id: idGenerator.generateId(constants.NAME),
  locationIdFrom: location.initials.gate1From.id,
  locationIdTo: location.initials.gate1To.id
};

export const gate2: State = {
  id: idGenerator.generateId(constants.NAME),
  locationIdFrom: location.initials.gate2From.id,
  locationIdTo: location.initials.gate2To.id
};
