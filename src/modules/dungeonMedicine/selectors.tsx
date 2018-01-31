import * as store from '../store';
import * as dungeonMedicines from '../dungeonMedicines';
import * as location from '../location';
import * as locations from '../locations';

export function getLocation(state: store.State, dungeonMedicineId: string): location.State {
  const locationId = dungeonMedicines.getOne(state, dungeonMedicineId).locationId;
  return locations.getOne(state, locationId);
}
