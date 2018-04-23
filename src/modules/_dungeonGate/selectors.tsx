import * as Store from '../_store';
import * as DungeonGates from '../_dungeonGates';
import * as Location from '../_location';
import * as Locations from '../_locations';

export function getFromLocation(state: Store.State, dungeonGateId: string): Location.State {
  const locationId = DungeonGates.getOne(state, dungeonGateId).locationIdFrom;
  return Locations.getOne(state, locationId);
}

export function getToLocation(state: Store.State, dungeonGateId: string): Location.State {
  const locationId = DungeonGates.getOne(state, dungeonGateId).locationIdTo;
  return Locations.getOne(state, locationId);
}
