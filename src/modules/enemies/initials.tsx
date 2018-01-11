import { Enemy, State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';
import * as weapons from '../weapons';

export const violentDrunkard: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Violent Drunkard',
  experience: 10,
  weaponId: weapons.initials.knife.id
};

export const dirtyBouncer: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Dirty Bouncer',
  experience: 20,
  weaponId: weapons.initials.club.id
};

export const grayGuard: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Gray Guard',
  experience: 30,
  weaponId: weapons.initials.dagger.id
};

export const ferociousMercenary: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Ferocious Mercenary',
  experience: 40,
  weaponId: weapons.initials.mace.id
};

export const darkKnight: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Dark Knight',
  experience: 60,
  weaponId: weapons.initials.spear.id
};

export const blackKing: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Black King',
  experience: 100,
  weaponId: weapons.initials.axe.id
};

export const enemies: State = {
  byId: {
    [violentDrunkard.id]: violentDrunkard,
    [dirtyBouncer.id]: dirtyBouncer,
    [grayGuard.id]: grayGuard,
    [ferociousMercenary.id]: ferociousMercenary,
    [darkKnight.id]: darkKnight,
    [blackKing.id]: blackKing
  },
  allIds: [
    violentDrunkard.id,
    dirtyBouncer.id,
    grayGuard.id,
    ferociousMercenary.id,
    darkKnight.id,
    blackKing.id
  ]
};
