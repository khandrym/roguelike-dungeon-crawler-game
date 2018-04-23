import * as Store from '../Store';
import * as DungeonEnemies from '../DungeonEnemies';
import * as Location from '../Location';
import * as Locations from '../Locations';

export function getLocation(state: Store.State, dungeonEnemyId: string): Location.State {
  const locationId = DungeonEnemies.getOne(state, dungeonEnemyId).locationId;
  return Locations.getOne(state, locationId);
}
