import { State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';
import * as weapons from '../weapons';

export const violentDrunkard: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Violent Drunkard',
  experience: 10,
  weaponId: weapons.initials.knife.id
};

export const dirtyBouncer: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Dirty Bouncer',
  experience: 20,
  weaponId: weapons.initials.club.id
};

export const grayGuard: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Gray Guard',
  experience: 30,
  weaponId: weapons.initials.dagger.id
};

export const ferociousMercenary: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Ferocious Mercenary',
  experience: 40,
  weaponId: weapons.initials.mace.id
};

export const darkKnight: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Dark Knight',
  experience: 60,
  weaponId: weapons.initials.spear.id
};

export const blackKing: State = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Black King',
  experience: 100,
  weaponId: weapons.initials.axe.id
};
