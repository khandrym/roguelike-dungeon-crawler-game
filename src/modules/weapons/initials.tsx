import { State } from './model';
import * as weapon from '../weapon';

export const weapons: State = {
  byId: {
    [weapon.initials.knife.id]: weapon.initials.knife,
    [weapon.initials.club.id]: weapon.initials.club,
    [weapon.initials.dagger.id]: weapon.initials.dagger,
    [weapon.initials.mace.id]: weapon.initials.mace,
    [weapon.initials.spear.id]: weapon.initials.spear,
    [weapon.initials.sword.id]: weapon.initials.sword,
    [weapon.initials.axe.id]: weapon.initials.axe
  },
  allIds: [
    weapon.initials.knife.id,
    weapon.initials.club.id,
    weapon.initials.dagger.id,
    weapon.initials.mace.id,
    weapon.initials.spear.id,
    weapon.initials.sword.id,
    weapon.initials.axe.id
  ]
};
