import * as player from '../player';
import * as locations from '../locations';
import * as weapons from '../weapons';
import idGenerator from '../idGenerator';

export interface State {
  player: player.State;
  locations: locations.State;
  weapons: weapons.State;
}

const initialPlayerLocation: locations.Location = {
  id: idGenerator.generateId(locations.constants.BASENAME),
  x: 15,
  y: 35
};

const initialLocations: locations.State = {
  byId: {
    [initialPlayerLocation.id]: initialPlayerLocation
  },
  allIds: [
    initialPlayerLocation.id
  ]
};

const initialPlayerWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Knife',
  attack: 20
};

const initialWeapons: weapons.State = {
  byId: {
    [initialPlayerWeapon.id]: initialPlayerWeapon
  },
  allIds: [
    initialPlayerWeapon.id
  ]
};

const initialPlayer: player.State = {
  name: 'Brave Hero',
  health: 100,
  locationId: initialPlayerLocation.id,
  weaponId: initialPlayerWeapon.id
};

export const initialState: State = {
  player: initialPlayer,
  locations: initialLocations,
  weapons: initialWeapons
};
