import { Enemy, State } from './model';
import * as constants from './constants';
import idGenerator from '../idGenerator';
import * as weapons from '../weapons';

export const blackKing: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Black King',
  experience: 100,
  weaponId: weapons.initials.axe.id
};

export const darkKnight: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Dark Knight',
  experience: 60,
  weaponId: weapons.initials.spear.id
};

export const ferociousMercenary: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Ferocious Mercenary',
  experience: 40,
  weaponId: weapons.initials.mace.id
};

export const grayGuard: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Gray Guard',
  experience: 30,
  weaponId: weapons.initials.dagger.id
};

export const dirtyBouncer: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Dirty Bouncer',
  experience: 20,
  weaponId: weapons.initials.club.id
};

export const violentDrunkard: Enemy = {
  id: idGenerator.generateId(constants.BASENAME),
  name: 'Violent Drunkard',
  experience: 10,
  weaponId: weapons.initials.knife.id
};

export const medicines: State = {
  byId: {
    [blackKing.id]: blackKing,
    [darkKnight.id]: darkKnight,
    [ferociousMercenary.id]: ferociousMercenary,
    [grayGuard.id]: grayGuard,
    [dirtyBouncer.id]: dirtyBouncer,
    [violentDrunkard.id]: violentDrunkard
  },
  allIds: [
    blackKing.id,
    darkKnight.id,
    ferociousMercenary.id,
    grayGuard.id,
    dirtyBouncer.id,
    violentDrunkard.id
  ]
};
