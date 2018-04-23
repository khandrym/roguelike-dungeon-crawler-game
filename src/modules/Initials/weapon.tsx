import { State, NAME } from '../Weapon';
import IdGenerator from '../IdGenerator';

export const knife: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Knife',
  attack: 10
};

export const club: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Club',
  attack: 20
};

export const dagger: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Dagger',
  attack: 40
};

export const mace: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Mace',
  attack: 60
};

export const spear: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Spear',
  attack: 80
};

export const sword: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Sword',
  attack: 100
};

export const axe: State = {
  id: IdGenerator.generateId(NAME),
  name: 'Axe',
  attack: 100
};
