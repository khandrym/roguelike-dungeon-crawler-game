import { State } from './model';
import * as Player from '../Player';
import * as Dungeons from '../Dungeons';
import * as Locations from '../Locations';
import * as Weapons from '../Weapons';
import * as Medicines from '../Medicines';
import * as Enemies from '../Enemies';
import * as DungeonMedicines from '../DungeonMedicines';
import * as DungeonWeapons from '../DungeonWeapons';
import * as DungeonEnemies from '../DungeonEnemies';
import * as DungeonGates from '../DungeonGates';

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
