// import * as store from '../../modules/store';

const onKeyPress = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowRight':
      console.warn('ArrowRight is down!');
      break;
    case 'ArrowLeft':
      console.warn('ArrowLeft is down!');
      break;
    default:
      break;
  }
};

window.document.addEventListener('keydown', onKeyPress, false);
