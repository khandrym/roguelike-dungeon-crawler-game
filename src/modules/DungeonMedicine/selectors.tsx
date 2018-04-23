import * as Store from '../Store';
import * as DungeonMedicines from '../DungeonMedicines';
import * as Location from '../Location';
import * as Locations from '../Locations';

export function getLocation(state: Store.State, dungeonMedicineId: string): Location.State {
  const locationId = DungeonMedicines.getOne(state, dungeonMedicineId).locationId;
  return Locations.getOne(state, locationId);
}
