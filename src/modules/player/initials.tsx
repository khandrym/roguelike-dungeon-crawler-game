import { State } from './model';
import * as locations from '../locations';
import * as weapons from '../weapons';

export const player: State = {
  name: 'Brave Hero',
  health: 100,
  experience: 10,
  locationId: locations.initials.player.id,
  weaponId: weapons.initials.knife.id
};
