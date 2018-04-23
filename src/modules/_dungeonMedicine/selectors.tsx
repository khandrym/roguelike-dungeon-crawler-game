import * as Store from '../_store';
import * as DungeonMedicines from '../_dungeonMedicines';
import * as Location from '../_location';
import * as Locations from '../_locations';

export function getLocation(state: Store.State, dungeonMedicineId: string): Location.State {
  const locationId = DungeonMedicines.getOne(state, dungeonMedicineId).locationId;
  return Locations.getOne(state, locationId);
}
