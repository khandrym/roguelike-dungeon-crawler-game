import * as dungeonWeapons from '../dungeonWeapons';
import * as dungeonWeapon from './dungeonWeapon';

export const all: dungeonWeapons.State = {
  byId: {
    [dungeonWeapon.knife.id]: dungeonWeapon.knife,
    [dungeonWeapon.club.id]: dungeonWeapon.club
  },
  allIds: [
    dungeonWeapon.knife.id,
    dungeonWeapon.club.id
  ]
};
