import * as player from '../player';
import * as locations from '../locations';
import * as weapons from '../weapons';
import idGenerator from '../idGenerator';

export interface State {
  player: player.State;
  locations: locations.State;
  weapons: weapons.State;
}

const initialPlayerLocation: locations.Location = {
  id: idGenerator.generateId(locations.constants.BASENAME),
  x: 15,
  y: 35
};

const initialLocations: locations.State = {
  byId: {
    [initialPlayerLocation.id]: initialPlayerLocation
  },
  allIds: [
    initialPlayerLocation.id
  ]
};

const initialKnifeWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Knife',
  attack: 10
};

const initialClubWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Club',
  attack: 20
};

const initialDaggerWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Dagger',
  attack: 40
};

const initialMaceWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Mace',
  attack: 60
};

const initialSpearWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Spear',
  attack: 80
};

const initialSwordWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Sword',
  attack: 100
};

const initialAxeWeapon: weapons.Weapon = {
  id: idGenerator.generateId(weapons.constants.BASENAME),
  name: 'Axe',
  attack: 100
};

const initialWeapons: weapons.State = {
  byId: {
    [initialKnifeWeapon.id]: initialKnifeWeapon,
    [initialClubWeapon.id]: initialClubWeapon,
    [initialDaggerWeapon.id]: initialDaggerWeapon,
    [initialMaceWeapon.id]: initialMaceWeapon,
    [initialSpearWeapon.id]: initialSpearWeapon,
    [initialSwordWeapon.id]: initialSwordWeapon,
    [initialAxeWeapon.id]: initialAxeWeapon
  },
  allIds: [
    initialKnifeWeapon.id,
    initialClubWeapon.id,
    initialDaggerWeapon.id,
    initialMaceWeapon.id,
    initialSpearWeapon.id,
    initialSwordWeapon.id,
    initialAxeWeapon.id,
  ]
};

const initialPlayer: player.State = {
  name: 'Brave Hero',
  health: 100,
  locationId: initialPlayerLocation.id,
  weaponId: initialKnifeWeapon.id
};

export const initialState: State = {
  player: initialPlayer,
  locations: initialLocations,
  weapons: initialWeapons
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

// const medicine_Water: Medicine = createMedicine('Water', 10);
// const medicine_Herb: Medicine = createMedicine('Herb', 20);
// const medicine_Potion: Medicine = createMedicine('Potion', 40);
