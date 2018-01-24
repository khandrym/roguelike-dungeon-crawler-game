import * as weapons from '../weapons';
import * as weapon from './weapon';

export const all: weapons.State = {
  byId: {
    [weapon.knife.id]: weapon.knife,
    [weapon.club.id]: weapon.club,
    [weapon.dagger.id]: weapon.dagger,
    [weapon.mace.id]: weapon.mace,
    [weapon.spear.id]: weapon.spear,
    [weapon.sword.id]: weapon.sword,
    [weapon.axe.id]: weapon.axe
  },
  allIds: [
    weapon.knife.id,
    weapon.club.id,
    weapon.dagger.id,
    weapon.mace.id,
    weapon.spear.id,
    weapon.sword.id,
    weapon.axe.id
  ]
};
