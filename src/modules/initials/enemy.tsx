import * as enemy from '../enemy';
import idGenerator from '../idGenerator';
import * as weapon from './weapon';

export const violentDrunkard: enemy.State = {
  id: idGenerator.generateId(enemy.constants.NAME),
  name: 'Violent Drunkard',
  experience: 10,
  weaponId: weapon.knife.id
};

export const dirtyBouncer: enemy.State = {
  id: idGenerator.generateId(enemy.constants.NAME),
  name: 'Dirty Bouncer',
  experience: 20,
  weaponId: weapon.club.id
};

export const grayGuard: enemy.State = {
  id: idGenerator.generateId(enemy.constants.NAME),
  name: 'Gray Guard',
  experience: 30,
  weaponId: weapon.dagger.id
};

export const ferociousMercenary: enemy.State = {
  id: idGenerator.generateId(enemy.constants.NAME),
  name: 'Ferocious Mercenary',
  experience: 40,
  weaponId: weapon.mace.id
};

export const darkKnight: enemy.State = {
  id: idGenerator.generateId(enemy.constants.NAME),
  name: 'Dark Knight',
  experience: 60,
  weaponId: weapon.spear.id
};

export const blackKing: enemy.State = {
  id: idGenerator.generateId(enemy.constants.NAME),
  name: 'Black King',
  experience: 100,
  weaponId: weapon.axe.id
};
