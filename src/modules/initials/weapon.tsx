import * as weapon from '../weapon';
import idGenerator from '../idGenerator';

export const knife: weapon.State = {
  id: idGenerator.generateId(weapon.constants.NAME),
  name: 'Knife',
  attack: 10
};

export const club: weapon.State = {
  id: idGenerator.generateId(weapon.constants.NAME),
  name: 'Club',
  attack: 20
};

export const dagger: weapon.State = {
  id: idGenerator.generateId(weapon.constants.NAME),
  name: 'Dagger',
  attack: 40
};

export const mace: weapon.State = {
  id: idGenerator.generateId(weapon.constants.NAME),
  name: 'Mace',
  attack: 60
};

export const spear: weapon.State = {
  id: idGenerator.generateId(weapon.constants.NAME),
  name: 'Spear',
  attack: 80
};

export const sword: weapon.State = {
  id: idGenerator.generateId(weapon.constants.NAME),
  name: 'Sword',
  attack: 100
};

export const axe: weapon.State = {
  id: idGenerator.generateId(weapon.constants.NAME),
  name: 'Axe',
  attack: 100
};
