import * as store from '../store';
import * as dungeonWeapons from '../dungeonWeapons';
import * as location from '../location';
import * as locations from '../locations';

export function getLocation(state: store.State, dungeonWeaponId: string): location.State {
  const locationId = dungeonWeapons.getOne(state, dungeonWeaponId).locationId;
  return locations.getOne(state, locationId);
}
