import * as store from '../../modules/store';
import * as locations from '../locations';
import * as neighborItem from '../neighborItem';
import ItemTypes from '../itemTypes';
import * as dungeonEnemies from '../dungeonEnemies';
import * as dungeonMedicines from '../dungeonMedicines';

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
      case ItemTypes.DUNGEON_ENEMY:
        const dungeonEnemy = dungeonEnemies.getOne(state, neighbor.itemId);
        if (dungeonEnemy.health <= 0) {
          store.dispatch(playerMovement(player.locationId));
        }
        break;
      case ItemTypes.DUNGEON_GATE:
        break;
      case ItemTypes.DUNGEON_MEDICINE:
        const dungeonMedicine = dungeonMedicines.getOne(state, neighbor.itemId);
        if (dungeonMedicine.health <= 0) {
          store.dispatch(playerMovement(player.locationId));
        }
        break;
      case ItemTypes.DUNGEON_WEAPON:
        break;
      default:
        store.dispatch(playerMovement(player.locationId));
        break;
    }
  }
};

window.document.addEventListener('keydown', onKeyPress, false);
