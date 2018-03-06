import * as store from '../../modules/store';
import * as locations from '../locations';

const onKeyPress = (event: KeyboardEvent) => {
  const state = store.getState();
  const player = store.getPlayer(state);
  switch (event.key) {
    case 'ArrowRight':
      store.dispatch(locations.moveRight(player.locationId));
      break;
    case 'ArrowLeft':
      store.dispatch(locations.moveLeft(player.locationId));
      break;
    case 'ArrowUp':
      store.dispatch(locations.moveUp(player.locationId));
      break;
    case 'ArrowDown':
      store.dispatch(locations.moveDown(player.locationId));
      break;
    default:
      break;
  }
};

window.document.addEventListener('keydown', onKeyPress, false);
