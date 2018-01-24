import { State } from '../dungeonWeapons/model';
import * as dungeonWeapon from './dungeonWeapon';

export const all: State = {
  byId: {
    [dungeonWeapon.knife.id]: dungeonWeapon.knife,
    [dungeonWeapon.club.id]: dungeonWeapon.club
  },
  allIds: [
    dungeonWeapon.knife.id,
    dungeonWeapon.club.id
  ]
};
