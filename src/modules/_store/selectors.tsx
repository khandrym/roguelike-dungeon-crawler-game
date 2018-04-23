import { State } from './model';
import * as Player from '../_player';
import * as Dungeons from '../_dungeons';
import * as Locations from '../_locations';
import * as Weapons from '../_weapons';
import * as Medicines from '../_medicines';
import * as Enemies from '../_enemies';
import * as DungeonMedicines from '../_dungeonMedicines';
import * as DungeonWeapons from '../_dungeonWeapons';
import * as DungeonEnemies from '../_dungeonEnemies';
import * as DungeonGates from '../_dungeonGates';

export function getPlayer(state: State): Player.State {
  return state.player;
}

export function getDungeons(state: State): Dungeons.State {
  return state.dungeons;
}

export function getLocations(state: State): Locations.State {
  return state.locations;
}

export function getWeapons(state: State): Weapons.State {
  return state.weapons;
}

export function getMedicines(state: State): Medicines.State {
  return state.medicines;
}

export function getEnemies(state: State): Enemies.State {
  return state.enemies;
}

export function getDungeonMedicines(state: State): DungeonMedicines.State {
  return state.dungeonMedicines;
}

export function getDungeonWeapons(state: State): DungeonWeapons.State {
  return state.dungeonWeapons;
}

export function getDungeonEnemies(state: State): DungeonEnemies.State {
  return state.dungeonEnemies;
}

export function getDungeonGates(state: State): DungeonGates.State {
  return state.dungeonGates;
}
