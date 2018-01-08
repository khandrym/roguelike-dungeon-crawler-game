import * as player from '../player';
import * as dungeons from '../dungeons';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';

export interface State {
  player: player.State;
  dungeons: dungeons.State;
  locations: locations.State;
  weapons: weapons.State;
  medicines: medicines.State;
}
