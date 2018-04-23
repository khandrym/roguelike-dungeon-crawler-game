import * as Store from '../Store';
import * as Location from '../Location';
import * as Locations from '../Locations';
import * as Weapon from '../Weapon';
import * as Weapons from '../Weapons';

export function getLocation(state: Store.State): Location.State {
  const locationId = Store.getPlayer(state).locationId;
  return Locations.getOne(state, locationId);
}

export function getWeapon(state: Store.State): Weapon.State {
  const weaponId = Store.getPlayer(state).weaponId;
  return Weapons.getOne(state, weaponId);
}
