import * as React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import ItemTypes from '../../_itemTypes';
import * as Store from '../../_store';
import * as Player from '../../_player';
import * as DungeonEnemies from '../../_dungeonEnemies';
import * as DungeonEnemy from '../../_dungeonEnemy';
import * as DungeonGates from '../../_dungeonGates';
import * as DungeonGate from '../../_dungeonGate';
import * as DungeonMedicines from '../../_dungeonMedicines';
import * as DungeonMedicine from '../../_dungeonMedicine';
import * as DungeonWeapons from '../../_dungeonWeapons';
import * as DungeonWeapon from '../../_dungeonWeapon';

interface OwnProps {
  x: number;
  y: number;
}

interface StateProps {
  itemType: ItemTypes;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <Cell x={props.x} y={props.y} itemType={props.itemType} />
  );
}

function mapStateToProps(state: Store.State, ownProps: OwnProps): StateProps {
  var itemType = ItemTypes.GROUND;
  const playerLocation = Player.getLocation(state);

  DungeonEnemies.getAllIds(state).forEach((dungeonEnemyId) => {
    const dungeonEnemyLocation = DungeonEnemy.getLocation(state, dungeonEnemyId);
    if (playerLocation.dungeonId === dungeonEnemyLocation.dungeonId &&
      ownProps.x === dungeonEnemyLocation.x &&
      ownProps.y === dungeonEnemyLocation.y) {
      itemType = ItemTypes.DUNGEON_ENEMY;
    }
  });

  DungeonGates.getAllIds(state).forEach((dungeonGateId) => {
    const dungeonGateFromLocation = DungeonGate.getFromLocation(state, dungeonGateId);
    if (playerLocation.dungeonId === dungeonGateFromLocation.dungeonId &&
      ownProps.x === dungeonGateFromLocation.x &&
      ownProps.y === dungeonGateFromLocation.y) {
      itemType = ItemTypes.DUNGEON_GATE;
    }
  });

  DungeonMedicines.getAllIds(state).forEach((dungeonMedicineId) => {
    const dungeonMedicineLocation = DungeonMedicine.getLocation(state, dungeonMedicineId);
    if (playerLocation.dungeonId === dungeonMedicineLocation.dungeonId &&
      ownProps.x === dungeonMedicineLocation.x &&
      ownProps.y === dungeonMedicineLocation.y) {
      itemType = ItemTypes.DUNGEON_MEDICINE;
    }
  });

  DungeonWeapons.getAllIds(state).forEach((dungeonWeaponId) => {
    const dungeonWeaponLocation = DungeonWeapon.getLocation(state, dungeonWeaponId);
    if (playerLocation.dungeonId === dungeonWeaponLocation.dungeonId &&
      ownProps.x === dungeonWeaponLocation.x &&
      ownProps.y === dungeonWeaponLocation.y) {
      itemType = ItemTypes.DUNGEON_WEAPON;
    }
  });

  if (ownProps.x === playerLocation.x &&
    ownProps.y === playerLocation.y) {
    itemType = ItemTypes.DUNGEON_PLAYER;
  }

  return {
    itemType: itemType
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
