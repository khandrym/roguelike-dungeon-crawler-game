import { State } from '../Player';
import * as location from './location';
import * as weapon from './weapon';

const player: State = {
  name: 'Brave Hero',
  health: 100,
  experience: 10,
  locationId: location.player.id,
  weaponId: weapon.knife.id
};

export default player;
