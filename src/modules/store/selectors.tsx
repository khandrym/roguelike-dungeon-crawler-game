import { State } from './model';
import * as player from '../player';
import * as dungeons from '../dungeons';
import * as locations from '../locations';
import * as weapons from '../weapons';
import * as medicines from '../medicines';
import * as enemies from '../enemies';
import * as dungeonMedicines from '../dungeonMedicines';
import * as dungeonWeapons from '../dungeonWeapons';
import * as dungeonEnemies from '../dungeonEnemies';
import * as dungeonGates from '../dungeonGates';

export function getPlayer(state: State): player.State {
  return state.player;
}

export function getDungeons(state: State): dungeons.State {
  return state.dungeons;
}

export function getLocations(state: State): locations.State {
  return state.locations;
}

export function getWeapons(state: State): weapons.State {
  return state.weapons;
}

export function getMedicines(state: State): medicines.State {
  return state.medicines;
}

export function getEnemies(state: State): enemies.State {
  return state.enemies;
}

export function getDungeonMedicines(state: State): dungeonMedicines.State {
  return state.dungeonMedicines;
}

export function getDungeonWeapons(state: State): dungeonWeapons.State {
  return state.dungeonWeapons;
}

export function getDungeonEnemies(state: State): dungeonEnemies.State {
  return state.dungeonEnemies;
}

export function getDungeonGates(state: State): dungeonGates.State {
  return state.dungeonGates;
}
