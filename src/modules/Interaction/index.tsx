import * as Store from '../Store';
import * as Locations from '../Locations';
import * as NeighborItem from '../NeighborItem';
import ItemTypes from '../ItemTypes';
import * as DungeonEnemies from '../DungeonEnemies';
import * as DungeonMedicines from '../DungeonMedicines';
import * as Weapons from '../Weapons';
import * as Enemies from '../Enemies';
import * as Player from '../Player';
import * as DungeonGates from '../DungeonGates';

const onKeyPress = (event: KeyboardEvent) => {
  const state = Store.getState();
  const player = Store.getPlayer(state);
  let neighborItem;
  let playerMovement;
  switch (event.key) {
    case 'ArrowRight':
      neighborItem = NeighborItem.getNeighborItemAtRight(state);
      playerMovement = Locations.moveRight;
      break;
    case 'ArrowLeft':
      neighborItem = NeighborItem.getNeighborItemAtLeft(state);
      playerMovement = Locations.moveLeft;
      break;
    case 'ArrowUp':
      neighborItem = NeighborItem.getNeighborItemAtTop(state);
      playerMovement = Locations.moveUp;
      break;
    case 'ArrowDown':
      neighborItem = NeighborItem.getNeighborItemAtBottom(state);
      playerMovement = Locations.moveDown;
      break;
    default:
      break;
  }
  if (neighborItem && playerMovement) {
    switch (neighborItem.itemType) {
      case ItemTypes.DUNGEON_ENEMY:
        const dungeonEnemy = DungeonEnemies.getOne(state, neighborItem.itemId);
        if (dungeonEnemy.health <= 0) {
          Store.dispatch(playerMovement(player.locationId));
        } else {
          const playerExperience = player.experience;
          const playerAttack = Weapons.getOne(state, player.weaponId).attack;
          const enemyExperience = Enemies.getOne(state, dungeonEnemy.enemyId).experience;
          const enemyAttack = Weapons.getOne(state, Enemies.getOne(state, dungeonEnemy.enemyId).weaponId).attack;
          const damageToPlayer = Math.floor(
            (enemyAttack + enemyExperience * 0.5 * (1 + Math.random())) /
            (playerExperience / 10));
          const damageToEnemy = Math.floor(
            (playerAttack + playerExperience * 0.5 * (1 + Math.random())) /
            (enemyExperience / 10));
          Store.dispatch(Player.decreaseHealth(damageToPlayer));
          Store.dispatch(DungeonEnemies.decreaseHealth(dungeonEnemy.id, damageToEnemy));
        }
        break;
      case ItemTypes.DUNGEON_GATE:
        const dungeonGate = DungeonGates.getOne(state, neighborItem.itemId);
        Store.dispatch(Locations.moveTo(player.locationId, dungeonGate.locationIdTo));
        break;
      case ItemTypes.DUNGEON_MEDICINE:
        const dungeonMedicine = DungeonMedicines.getOne(state, neighborItem.itemId);
        if (dungeonMedicine.health <= 0) {
          Store.dispatch(playerMovement(player.locationId));
        }
        break;
      case ItemTypes.DUNGEON_WEAPON:
        break;
      default:
        Store.dispatch(playerMovement(player.locationId));
        break;
    }
  }
};

window.document.addEventListener('keydown', onKeyPress, false);
