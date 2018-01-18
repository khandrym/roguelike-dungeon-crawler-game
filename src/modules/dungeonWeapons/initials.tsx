import { State } from './model';
import * as dungeonWeapon from '../dungeonWeapon';

export const dungeonWeapons: State = {
  byId: {
    [dungeonWeapon.initials.knife.id]: dungeonWeapon.initials.knife,
    [dungeonWeapon.initials.club.id]: dungeonWeapon.initials.club
  },
  allIds: [
    dungeonWeapon.initials.knife.id,
    dungeonWeapon.initials.club.id
  ]
};
