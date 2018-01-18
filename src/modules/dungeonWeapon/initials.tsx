import { State } from './model';
import * as constants from './constants';
import * as weapon from '../weapon';
import * as location from '../location';
import idGenerator from '../idGenerator';

export const knife: State = {
  id: idGenerator.generateId(constants.NAME),
  weaponId: weapon.initials.knife.id,
  locationId: location.initials.knife.id
};

export const club: State = {
  id: idGenerator.generateId(constants.NAME),
  weaponId: weapon.initials.club.id,
  locationId: location.initials.club.id
};
