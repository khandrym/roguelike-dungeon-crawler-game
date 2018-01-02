import * as player from '../player';
import * as locations from '../locations';
import idGenerator from '../idGenerator';

export interface State {
  player: player.State;
  locations: locations.State;
}

const initialPlayerLocation: locations.Location = {
  id: idGenerator.generateId(locations.constants.BASENAME),
  x: 10,
  y: 10
};

const initialLocations: locations.State = {
  byId: {
    [initialPlayerLocation.id]: initialPlayerLocation
  },
  allIds: [
    initialPlayerLocation.id
  ]
};

const initialPlayer: player.State = {
  name: 'Brave Hero',
  health: 75,
  locationId: initialPlayerLocation.id
};

export const initialState: State = {
  player: initialPlayer,
  locations: initialLocations
};
