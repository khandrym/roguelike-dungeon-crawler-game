import { State } from './model';
import * as location from '../location';
import * as weapons from '../weapons';

export const player: State = {
  name: 'Brave Hero',
  health: 100,
  experience: 10,
  locationId: location.initials.player.id,
  weaponId: weapons.initials.knife.id
};
