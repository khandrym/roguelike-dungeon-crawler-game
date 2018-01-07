import * as player from '../player';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';

export interface State {
  player: player.State;
  locations: locations.State;
  weapons: weapons.State;
  medicines: medicines.State;
}

export const initialState: State = {
  player: player.initials.player,
  locations: locations.initials.locations,
  weapons: weapons.initials.weapons,
  medicines: medicines.initials.medicines
};

// const dungeon_Gray: Dungeon = createDungeon('Gray Dungeon', []);
// const dungeon_Dark: Dungeon = createDungeon('Durk Dungeon', []);
// const dungeon_Black: Dungeon = createDungeon('Black Dungeon', []);
// const dungeons: Dungeon[] = [dungeon_Gray, dungeon_Dark, dungeon_Black];

// const enemy_BlackKing: Enemy = createEnemy('Black King', 100, weapon_Axe.id);
// const enemy_Knight: Enemy = createEnemy('Dark Knight', 60, weapon_Spear.id);
// const enemy_Mercenary: Enemy = createEnemy('Ferocious Mercenary', 40, weapon_Mace.id);
// const enemy_Guard: Enemy = createEnemy('Gray Guard', 30, weapon_Dagger.id);
// const enemy_Bouncer: Enemy = createEnemy('Dirty Bouncer', 20, weapon_Club.id);
// const enemy_ViolentDrunkard: Enemy = createEnemy('Violent Drunkard', 10, weapon_Knife.id);
