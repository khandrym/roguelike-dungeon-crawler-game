import { State, NAME } from '../_enemy';
import IdGenerator from '../_idGenerator';
import * as weapon from './weapon';

export const violentDrunkard: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Violent Drunkard',
  experience: 10,
  weaponId: weapon.knife.id
};

export const dirtyBouncer: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Dirty Bouncer',
  experience: 20,
  weaponId: weapon.club.id
};

export const grayGuard: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Gray Guard',
  experience: 30,
  weaponId: weapon.dagger.id
};

export const ferociousMercenary: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Ferocious Mercenary',
  experience: 40,
  weaponId: weapon.mace.id
};

export const darkKnight: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Dark Knight',
  experience: 60,
  weaponId: weapon.spear.id
};

export const blackKing: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Black King',
  experience: 100,
  weaponId: weapon.axe.id
};
