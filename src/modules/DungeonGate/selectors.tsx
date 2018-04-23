import * as Store from '../Store';
import * as DungeonGates from '../DungeonGates';
import * as Location from '../Location';
import * as Locations from '../Locations';

export function getFromLocation(state: Store.State, dungeonGateId: string): Location.State {
  const locationId = DungeonGates.getOne(state, dungeonGateId).locationIdFrom;
  return Locations.getOne(state, locationId);
}

export function getToLocation(state: Store.State, dungeonGateId: string): Location.State {
  const locationId = DungeonGates.getOne(state, dungeonGateId).locationIdTo;
  return Locations.getOne(state, locationId);
}
