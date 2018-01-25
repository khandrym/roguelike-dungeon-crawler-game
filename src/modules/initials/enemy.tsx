import { State, NAME } from '../enemy';
import idGenerator from '../idGenerator';
import * as weapon from './weapon';

export const violentDrunkard: State = {
  id: idGenerator.generateId(NAME),
  name: 'Violent Drunkard',
  experience: 10,
  weaponId: weapon.knife.id
};

export const dirtyBouncer: State = {
  id: idGenerator.generateId(NAME),
  name: 'Dirty Bouncer',
  experience: 20,
  weaponId: weapon.club.id
};

export const grayGuard: State = {
  id: idGenerator.generateId(NAME),
  name: 'Gray Guard',
  experience: 30,
  weaponId: weapon.dagger.id
};

export const ferociousMercenary: State = {
  id: idGenerator.generateId(NAME),
  name: 'Ferocious Mercenary',
  experience: 40,
  weaponId: weapon.mace.id
};

export const darkKnight: State = {
  id: idGenerator.generateId(NAME),
  name: 'Dark Knight',
  experience: 60,
  weaponId: weapon.spear.id
};

export const blackKing: State = {
  id: idGenerator.generateId(NAME),
  name: 'Black King',
  experience: 100,
  weaponId: weapon.axe.id
};
