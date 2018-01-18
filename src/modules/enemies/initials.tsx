import { State } from './model';
import * as enemy from '../enemy';

export const enemies: State = {
  byId: {
    [enemy.initials.violentDrunkard.id]: enemy.initials.violentDrunkard,
    [enemy.initials.dirtyBouncer.id]: enemy.initials.dirtyBouncer,
    [enemy.initials.grayGuard.id]: enemy.initials.grayGuard,
    [enemy.initials.ferociousMercenary.id]: enemy.initials.ferociousMercenary,
    [enemy.initials.darkKnight.id]: enemy.initials.darkKnight,
    [enemy.initials.blackKing.id]: enemy.initials.blackKing
  },
  allIds: [
    enemy.initials.violentDrunkard.id,
    enemy.initials.dirtyBouncer.id,
    enemy.initials.grayGuard.id,
    enemy.initials.ferociousMercenary.id,
    enemy.initials.darkKnight.id,
    enemy.initials.blackKing.id
  ]
};
