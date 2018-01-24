import { State, NAME } from '../dungeonWeapon/model';
import * as weapon from './weapon';
import * as location from './location';
import idGenerator from '../idGenerator';

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
