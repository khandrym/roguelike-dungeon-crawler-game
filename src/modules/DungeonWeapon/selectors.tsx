import * as Store from '../Store';
import * as DungeonWeapons from '../DungeonWeapons';
import * as Location from '../Location';
import * as Locations from '../Locations';

export function getLocation(state: Store.State, dungeonWeaponId: string): Location.State {
  const locationId = DungeonWeapons.getOne(state, dungeonWeaponId).locationId;
  return Locations.getOne(state, locationId);
}
