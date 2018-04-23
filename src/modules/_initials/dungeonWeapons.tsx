import { State } from '../_dungeonWeapons';
import * as dungeonWeapon from './dungeonWeapon';

const dungeonWeapons: State = {
  byId: {
    [dungeonWeapon.knife.id]: dungeonWeapon.knife,
    [dungeonWeapon.club.id]: dungeonWeapon.club
  },
  allIds: [
    dungeonWeapon.knife.id,
    dungeonWeapon.club.id
  ]
};

export default dungeonWeapons;
