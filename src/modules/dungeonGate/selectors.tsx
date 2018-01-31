import * as store from '../store';
import * as dungeonGates from '../dungeonGates';
import * as location from '../location';
import * as locations from '../locations';

export function getFromLocation(state: store.State, dungeonGateId: string): location.State {
  const locationId = dungeonGates.getOne(state, dungeonGateId).locationIdFrom;
  return locations.getOne(state, locationId);
}

export function getToLocation(state: store.State, dungeonGateId: string): location.State {
  const locationId = dungeonGates.getOne(state, dungeonGateId).locationIdTo;
  return locations.getOne(state, locationId);
}
