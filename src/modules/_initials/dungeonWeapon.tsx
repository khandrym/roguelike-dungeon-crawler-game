import { State, NAME } from '../_dungeonWeapon';
import IdGenerator from '../_idGenerator';
import * as weapon from './weapon';
import * as location from './location';

export const knife: State = {
  id: IdGenerator.generateId(NAME),
  weaponId: weapon.knife.id,
  locationId: location.knife.id
};

export const club: State = {
  id: IdGenerator.generateId(NAME),
  weaponId: weapon.club.id,
  locationId: location.club.id
};
