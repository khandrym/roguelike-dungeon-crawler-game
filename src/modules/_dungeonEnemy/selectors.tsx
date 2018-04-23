import * as Store from '../_store';
import * as DungeonEnemies from '../_dungeonEnemies';
import * as Location from '../_location';
import * as Locations from '../_locations';

export function getLocation(state: Store.State, dungeonEnemyId: string): Location.State {
  const locationId = DungeonEnemies.getOne(state, dungeonEnemyId).locationId;
  return Locations.getOne(state, locationId);
}
