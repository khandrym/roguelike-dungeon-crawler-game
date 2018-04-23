import { State } from './model';
import ItemTypes from '../_itemTypes';
import * as Store from '../_store';
import * as Location from '../_location';
import * as Player from '../_player';
import * as DungeonEnemies from '../_dungeonEnemies';
import * as DungeonEnemy from '../_dungeonEnemy';
import * as DungeonGates from '../_dungeonGates';
import * as DungeonGate from '../_dungeonGate';
import * as DungeonMedicines from '../_dungeonMedicines';
import * as DungeonMedicine from '../_dungeonMedicine';
import * as DungeonWeapons from '../_dungeonWeapons';
import * as DungeonWeapon from '../_dungeonWeapon';

function isAtTop(playerLocation: Location.State, itemLocation: Location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x &&
    playerLocation.y === itemLocation.y + 1);
}

function isAtBottom(playerLocation: Location.State, itemLocation: Location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x &&
    playerLocation.y === itemLocation.y - 1);
}

function isAtRight(playerLocation: Location.State, itemLocation: Location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x - 1 &&
    playerLocation.y === itemLocation.y);
}

function isAtLeft(playerLocation: Location.State, itemLocation: Location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x + 1 &&
    playerLocation.y === itemLocation.y);
}

function getNeighborItem(
  state: Store.State,
  isAtPosition: (
    playerLocation: Location.State,
    itemLocation: Location.State) => boolean): State {

  let dungeonItem: State = {
    itemType: ItemTypes.GROUND,
    itemId: ''
  };

  const playerLocation = Player.getLocation(state);

  DungeonEnemies.getAllIds(state).forEach((dungeonEnemyId) => {
    const dungeonEnemyLocation = DungeonEnemy.getLocation(state, dungeonEnemyId);
    if (isAtPosition(playerLocation, dungeonEnemyLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_ENEMY,
        itemId: dungeonEnemyId
      };
    }
  });

  DungeonGates.getAllIds(state).forEach((dungeonGateId) => {
    const dungeonGateLocation = DungeonGate.getFromLocation(state, dungeonGateId);
    if (isAtPosition(playerLocation, dungeonGateLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_GATE,
        itemId: dungeonGateId
      };
    }
  });

  DungeonMedicines.getAllIds(state).forEach((dungeonMedicineId) => {
    const dungeonMedicineLocation = DungeonMedicine.getLocation(state, dungeonMedicineId);
    if (isAtPosition(playerLocation, dungeonMedicineLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_MEDICINE,
        itemId: dungeonMedicineId
      };
    }
  });

  DungeonWeapons.getAllIds(state).forEach((dungeonWeaponId) => {
    const dungeonWeaponLocation = DungeonWeapon.getLocation(state, dungeonWeaponId);
    if (isAtPosition(playerLocation, dungeonWeaponLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_WEAPON,
        itemId: dungeonWeaponId
      };
    }
  });

  return dungeonItem;
}

export function getNeighborItemAtTop(state: Store.State): State {
  return getNeighborItem(state, isAtTop);
}

export function getNeighborItemAtBottom(state: Store.State): State {
  return getNeighborItem(state, isAtBottom);
}

export function getNeighborItemAtRight(state: Store.State): State {
  return getNeighborItem(state, isAtRight);
}

export function getNeighborItemAtLeft(state: Store.State): State {
  return getNeighborItem(state, isAtLeft);
}
