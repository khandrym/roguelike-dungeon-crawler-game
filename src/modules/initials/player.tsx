import { State } from '../player/model';
import * as location from './location';
import * as weapon from './weapon';

export const hero: State = {
  name: 'Brave Hero',
  health: 100,
  experience: 10,
  locationId: location.player.id,
  weaponId: weapon.knife.id
};
