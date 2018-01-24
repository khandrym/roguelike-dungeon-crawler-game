import * as enemies from '../enemies';
import * as enemy from './enemy';

export const all: enemies.State = {
  byId: {
    [enemy.violentDrunkard.id]: enemy.violentDrunkard,
    [enemy.dirtyBouncer.id]: enemy.dirtyBouncer,
    [enemy.grayGuard.id]: enemy.grayGuard,
    [enemy.ferociousMercenary.id]: enemy.ferociousMercenary,
    [enemy.darkKnight.id]: enemy.darkKnight,
    [enemy.blackKing.id]: enemy.blackKing
  },
  allIds: [
    enemy.violentDrunkard.id,
    enemy.dirtyBouncer.id,
    enemy.grayGuard.id,
    enemy.ferociousMercenary.id,
    enemy.darkKnight.id,
    enemy.blackKing.id
  ]
};
