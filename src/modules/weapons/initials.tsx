import { Weapon, State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';

export const knife: Weapon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Knife',
  attack: 10
};

export const club: Weapon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Club',
  attack: 20
};

export const dagger: Weapon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Dagger',
  attack: 40
};

export const mace: Weapon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Mace',
  attack: 60
};

export const spear: Weapon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Spear',
  attack: 80
};

export const sword: Weapon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Sword',
  attack: 100
};

export const axe: Weapon = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Axe',
  attack: 100
};

export const weapons: State = {
  byId: {
    [knife.id]: knife,
    [club.id]: club,
    [dagger.id]: dagger,
    [mace.id]: mace,
    [spear.id]: spear,
    [sword.id]: sword,
    [axe.id]: axe
  },
  allIds: [
    knife.id,
    club.id,
    dagger.id,
    mace.id,
    spear.id,
    sword.id,
    axe.id
  ]
};
