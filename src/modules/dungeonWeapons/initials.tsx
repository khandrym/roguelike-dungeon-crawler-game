import { DungeonWeapon, State } from './model';
import * as constants from './constants';
import * as weapons from '../weapons';
import * as location from '../location';
import idGenerator from '../idGenerator';

export const knife: DungeonWeapon = {
  id: idGenerator.generateId(constants.BASENAME),
  weaponId: weapons.initials.knife.id,
  locationId: location.initials.knife.id
};

export const club: DungeonWeapon = {
  id: idGenerator.generateId(constants.BASENAME),
  weaponId: weapons.initials.club.id,
  locationId: location.initials.club.id
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
