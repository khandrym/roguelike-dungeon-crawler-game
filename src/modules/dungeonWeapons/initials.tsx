import { DungeonWeapon, State } from './model';
import * as constants from './constants';
import * as weapons from '../weapons';
import * as locations from '../locations';
import idGenerator from '../idGenerator';

export const knife: DungeonWeapon = {
  id: idGenerator.generateId(constants.BASENAME),
  weaponId: weapons.initials.knife.id,
  locationId: locations.initials.knife.id
};

export const club: DungeonWeapon = {
  id: idGenerator.generateId(constants.BASENAME),
  weaponId: weapons.initials.club.id,
  locationId: locations.initials.club.id
};

export const dungeonWeapons: State = {
  byId: {
    [knife.id]: knife,
    [club.id]: club
  },
  allIds: [
    knife.id,
    club.id
  ]
};
