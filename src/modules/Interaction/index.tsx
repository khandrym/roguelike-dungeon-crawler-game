import * as Store from '../Store';
import * as Locations from '../Locations';
import * as NeighborItem from '../NeighborItem';
import ItemTypes from '../ItemTypes';
import * as DungeonEnemies from '../DungeonEnemies';
import * as DungeonMedicines from '../DungeonMedicines';
import * as Weapons from '../Weapons';
import * as Enemies from '../Enemies';
import * as Player from '../Player';

const onKeyPress = (event: KeyboardEvent) => {
  const state = Store.getState();
  const player = Store.getPlayer(state);
  let neighbor;
  let playerMovement;
  switch (event.key) {
    case 'ArrowRight':
      neighbor = NeighborItem.getNeighborItemAtRight(state);
      playerMovement = Locations.moveRight;
      break;
    case 'ArrowLeft':
      neighbor = NeighborItem.getNeighborItemAtLeft(state);
      playerMovement = Locations.moveLeft;
      break;
    case 'ArrowUp':
      neighbor = NeighborItem.getNeighborItemAtTop(state);
      playerMovement = Locations.moveUp;
      break;
    case 'ArrowDown':
      neighbor = NeighborItem.getNeighborItemAtBottom(state);
      playerMovement = Locations.moveDown;
      break;
    default:
      break;
  }
  if (neighbor && playerMovement) {
    switch (neighbor.itemType) {
      case ItemTypes.DUNGEON_ENEMY:
        const dungeonEnemy = DungeonEnemies.getOne(state, neighbor.itemId);
        if (dungeonEnemy.health <= 0) {
          Store.dispatch(playerMovement(player.locationId));
        } else {
          const playerExperience = player.experience;
          const playerAttack = Weapons.getOne(state, player.weaponId).attack;
          const enemyExperience = Enemies.getOne(state, dungeonEnemy.enemyId).experience;
          const enemyAttack = Weapons.getOne(state, Enemies.getOne(state, dungeonEnemy.enemyId).weaponId).attack;
          const damageToPlayer = (enemyAttack + enemyExperience * (0.5)) / (playerExperience / 10);
          const damageToEnemy = (playerAttack + playerExperience * (0.5)) / (enemyExperience / 10);
          Store.dispatch(Player.decreaseHealth(damageToPlayer));
          Store.dispatch(DungeonEnemies.decreaseHealth(dungeonEnemy.id, damageToEnemy));
        }
        break;
      case ItemTypes.DUNGEON_GATE:
        break;
      case ItemTypes.DUNGEON_MEDICINE:
        const dungeonMedicine = DungeonMedicines.getOne(state, neighbor.itemId);
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
