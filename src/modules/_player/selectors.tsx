import * as Store from '../_store';
import * as Location from '../_location';
import * as Locations from '../_locations';
import * as Weapon from '../_weapon';
import * as Weapons from '../_weapons';

export function getLocation(state: Store.State): Location.State {
  const locationId = Store.getPlayer(state).locationId;
  return Locations.getOne(state, locationId);
}

export function getWeapon(state: Store.State): Weapon.State {
  const weaponId = Store.getPlayer(state).weaponId;
  return Weapons.getOne(state, weaponId);
}
