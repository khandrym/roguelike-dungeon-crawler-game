import * as store from '../../modules/store';
import * as locations from '../locations';
import * as neighborItem from '../neighborItem';
import ItemTypes from '../itemTypes';
// import * as enemies from '../enemies';

const onKeyPress = (event: KeyboardEvent) => {
  const state = store.getState();
  const player = store.getPlayer(state);
  let neighbor;
  let playerMovement;
  switch (event.key) {
    case 'ArrowRight':
      neighbor = neighborItem.getNeighborItemAtRight(state);
      playerMovement = locations.moveRight;
      break;
    case 'ArrowLeft':
      neighbor = neighborItem.getNeighborItemAtLeft(state);
      playerMovement = locations.moveLeft;
      break;
    case 'ArrowUp':
      neighbor = neighborItem.getNeighborItemAtTop(state);
      playerMovement = locations.moveUp;
      break;
    case 'ArrowDown':
      neighbor = neighborItem.getNeighborItemAtBottom(state);
      playerMovement = locations.moveDown;
      break;
    default:
      break;
  }
  if (neighbor && playerMovement) {
    switch (neighbor.itemType) {
      case ItemTypes.ENEMY:
        // const enemy = enemies.getOne(state, neighbor.itemId);
        break;
      case ItemTypes.GATE:
        break;
      case ItemTypes.MEDICINE:
        break;
      case ItemTypes.WEAPON:
        break;
      default:
        store.dispatch(playerMovement(player.locationId));
        break;
    }
  }
};

window.document.addEventListener('keydown', onKeyPress, false);
