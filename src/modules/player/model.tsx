import { AnyAction } from 'redux';
import { Dispatch } from 'react-redux';
import * as neighbourItem from '../neighbourItem';
import * as locations from '../locations';

export const NAME = 'player';

export interface State {
  name: string;
  health: number;
  experience: number;
  locationId: string;
  weaponId: string;
}

export enum MovementTypes {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  UP = 'UP',
  DOWN = 'DOWN'
}

export function move(
  dispatch: Dispatch<AnyAction>,
  player: State,
  interactionItem: neighbourItem.State,
  movementType: MovementTypes):
  void {
  switch (movementType) {
    case MovementTypes.RIGHT:
      dispatch(locations.moveRight(player.locationId));
      break;
    case MovementTypes.LEFT:
      dispatch(locations.moveLeft(player.locationId));
      break;
    case MovementTypes.UP:
      dispatch(locations.moveUp(player.locationId));
      break;
    case MovementTypes.DOWN:
      dispatch(locations.moveDown(player.locationId));
      break;
    default:
      break;
  }
}
