import { State, NAME } from '../dungeonWeapon';
import idGenerator from '../idGenerator';
import * as weapon from './weapon';
import * as location from './location';

export const knife: State = {
  id: idGenerator.generateId(NAME),
  weaponId: weapon.knife.id,
  locationId: location.knife.id
};

export const club: State = {
  id: idGenerator.generateId(NAME),
  weaponId: weapon.club.id,
  locationId: location.club.id
};
