import { State } from './model';
import ItemTypes from '../itemTypes';
import * as store from '../store';
import * as location from '../location';
import * as player from '../player';
import * as dungeonEnemies from '../dungeonEnemies';
import * as dungeonEnemy from '../dungeonEnemy';
import * as dungeonGates from '../dungeonGates';
import * as dungeonGate from '../dungeonGate';
import * as dungeonMedicines from '../dungeonMedicines';
import * as dungeonMedicine from '../dungeonMedicine';
import * as dungeonWeapons from '../dungeonWeapons';
import * as dungeonWeapon from '../dungeonWeapon';

function isAtTop(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x &&
    playerLocation.y === itemLocation.y + 1);
}

function isAtBottom(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x &&
    playerLocation.y === itemLocation.y - 1);
}

function isAtRight(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x - 1 &&
    playerLocation.y === itemLocation.y);
}

function isAtLeft(playerLocation: location.State, itemLocation: location.State): boolean {
  return (playerLocation.dungeonId === itemLocation.dungeonId &&
    playerLocation.x === itemLocation.x + 1 &&
    playerLocation.y === itemLocation.y);
}

function getNeighborItem(
  state: store.State,
  isAtPosition: (
    playerLocation: location.State,
    itemLocation: location.State) => boolean): State {

  let dungeonItem: State = {
    itemType: ItemTypes.GROUND,
    itemId: ''
  };

  const playerLocation = player.getLocation(state);

  dungeonEnemies.getAllIds(state).forEach((dungeonEnemyId) => {
    const dungeonEnemyLocation = dungeonEnemy.getLocation(state, dungeonEnemyId);
    if (isAtPosition(playerLocation, dungeonEnemyLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_ENEMY,
        itemId: dungeonEnemyId
      };
    }
  });

  dungeonGates.getAllIds(state).forEach((dungeonGateId) => {
    const dungeonGateLocation = dungeonGate.getFromLocation(state, dungeonGateId);
    if (isAtPosition(playerLocation, dungeonGateLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_GATE,
        itemId: dungeonGateId
      };
    }
  });

  dungeonMedicines.getAllIds(state).forEach((dungeonMedicineId) => {
    const dungeonMedicineLocation = dungeonMedicine.getLocation(state, dungeonMedicineId);
    if (isAtPosition(playerLocation, dungeonMedicineLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_MEDICINE,
        itemId: dungeonMedicineId
      };
    }
  });

  dungeonWeapons.getAllIds(state).forEach((dungeonWeaponId) => {
    const dungeonWeaponLocation = dungeonWeapon.getLocation(state, dungeonWeaponId);
    if (isAtPosition(playerLocation, dungeonWeaponLocation)) {
      dungeonItem = {
        itemType: ItemTypes.DUNGEON_WEAPON,
        itemId: dungeonWeaponId
      };
    }
  });

  return dungeonItem;
}

export function getNeighborItemAtTop(state: store.State): State {
  return getNeighborItem(state, isAtTop);
}

export function getNeighborItemAtBottom(state: store.State): State {
  return getNeighborItem(state, isAtBottom);
}

export function getNeighborItemAtRight(state: store.State): State {
  return getNeighborItem(state, isAtRight);
}

export function getNeighborItemAtLeft(state: store.State): State {
  return getNeighborItem(state, isAtLeft);
}
