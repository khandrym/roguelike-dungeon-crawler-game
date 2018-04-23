import * as Store from '../_store';
import * as DungeonWeapons from '../_dungeonWeapons';
import * as Location from '../_location';
import * as Locations from '../_locations';

export function getLocation(state: Store.State, dungeonWeaponId: string): Location.State {
  const locationId = DungeonWeapons.getOne(state, dungeonWeaponId).locationId;
  return Locations.getOne(state, locationId);
}
