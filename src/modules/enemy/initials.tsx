import { State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';
import * as weapon from '../weapon';

export const violentDrunkard: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Violent Drunkard',
  experience: 10,
  weaponId: weapon.initials.knife.id
};

export const dirtyBouncer: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Dirty Bouncer',
  experience: 20,
  weaponId: weapon.initials.club.id
};

export const grayGuard: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Gray Guard',
  experience: 30,
  weaponId: weapon.initials.dagger.id
};

export const ferociousMercenary: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Ferocious Mercenary',
  experience: 40,
  weaponId: weapon.initials.mace.id
};

export const darkKnight: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Dark Knight',
  experience: 60,
  weaponId: weapon.initials.spear.id
};

export const blackKing: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Black King',
  experience: 100,
  weaponId: weapon.initials.axe.id
};
