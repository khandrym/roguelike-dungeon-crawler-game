import * as store from '../store';
import * as dungeonEnemies from '../dungeonEnemies';
import * as location from '../location';
import * as locations from '../locations';

export function getLocation(state: store.State, dungeonEnemyId: string): location.State {
  const dungeonEnemy = dungeonEnemies.getDungeonEnemy(state, dungeonEnemyId);
  const locationId = dungeonEnemy.locationId;
  return locations.getLocation(state, locationId);
}
