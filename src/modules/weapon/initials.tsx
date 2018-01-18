import { State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';

export const knife: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Knife',
  attack: 10
};

export const club: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Club',
  attack: 20
};

export const dagger: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Dagger',
  attack: 40
};

export const mace: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Mace',
  attack: 60
};

export const spear: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Spear',
  attack: 80
};

export const sword: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Sword',
  attack: 100
};

export const axe: State = {
  id: idGenerator.generateId(constants.NAME),
  name: 'Axe',
  attack: 100
};
