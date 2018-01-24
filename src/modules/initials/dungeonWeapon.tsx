import * as dungeonWeapon from '../dungeonWeapon';
import * as weapon from './weapon';
import * as location from './location';
import idGenerator from '../idGenerator';

export const knife: dungeonWeapon.State = {
  id: idGenerator.generateId(dungeonWeapon.constants.NAME),
  weaponId: weapon.knife.id,
  locationId: location.knife.id
};

export const club: dungeonWeapon.State = {
  id: idGenerator.generateId(dungeonWeapon.constants.NAME),
  weaponId: weapon.club.id,
  locationId: location.club.id
};
