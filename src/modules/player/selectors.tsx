import * as store from '../store';
import * as location from '../location';
import * as locations from '../locations';
import * as weapon from '../weapon';
import * as weapons from '../weapons';

export function getLocation(state: store.State): location.State {
  const locationId = store.getPlayer(state).locationId;
  return locations.getLocation(state, locationId);
}

export function getWeapon(state: store.State): weapon.State {
  const weaponId = store.getPlayer(state).weaponId;
  return weapons.getWeapon(state, weaponId);
}
