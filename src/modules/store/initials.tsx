import { State } from './model';
import * as player from '../player';
import * as dungeons from '../dungeons';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';

export const store: State = {
  player: player.initials.player,
  dungeons: dungeons.initials.dungeons,
  locations: locations.initials.locations,
  weapons: weapons.initials.weapons,
  medicines: medicines.initials.medicines
};

// const enemy_BlackKing: Enemy = createEnemy('Black King', 100, weapon_Axe.id);
// const enemy_Knight: Enemy = createEnemy('Dark Knight', 60, weapon_Spear.id);
// const enemy_Mercenary: Enemy = createEnemy('Ferocious Mercenary', 40, weapon_Mace.id);
// const enemy_Guard: Enemy = createEnemy('Gray Guard', 30, weapon_Dagger.id);
// const enemy_Bouncer: Enemy = createEnemy('Dirty Bouncer', 20, weapon_Club.id);
// const enemy_ViolentDrunkard: Enemy = createEnemy('Violent Drunkard', 10, weapon_Knife.id);
