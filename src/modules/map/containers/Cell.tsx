import * as React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import ItemTypes from '../../itemTypes';
import * as store from '../../store';
import * as player from '../../player';
import * as dungeonEnemies from '../../dungeonEnemies';
import * as dungeonEnemy from '../../dungeonEnemy';
import * as dungeonGates from '../../dungeonGates';
import * as dungeonGate from '../../dungeonGate';
import * as dungeonMedicines from '../../dungeonMedicines';
import * as dungeonMedicine from '../../dungeonMedicine';

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

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  var itemType = ItemTypes.GROUND;

  const playerLocation = player.getLocation(state);
  if (ownProps.x === playerLocation.x &&
    ownProps.y === playerLocation.y) {
    itemType = ItemTypes.PLAYER;
  }

  dungeonEnemies.getAllIds(state).forEach((dungeonEnemyId) => {
    const dungeonEnemyLocation = dungeonEnemy.getLocation(state, dungeonEnemyId);
    if (playerLocation.dungeonId === dungeonEnemyLocation.dungeonId &&
      ownProps.x === dungeonEnemyLocation.x &&
      ownProps.y === dungeonEnemyLocation.y) {
      itemType = ItemTypes.ENEMY;
    }
  });

  dungeonGates.getAllIds(state).forEach((dungeonGateId) => {
    const dungeonGateFromLocation = dungeonGate.getFromLocation(state, dungeonGateId);
    if (playerLocation.dungeonId === dungeonGateFromLocation.dungeonId &&
      ownProps.x === dungeonGateFromLocation.x &&
      ownProps.y === dungeonGateFromLocation.y) {
      itemType = ItemTypes.GATE;
    }
  });

  dungeonMedicines.getAllIds(state).forEach((dungeonMedicineId) => {
    const dungeonMedicineLocation = dungeonMedicine.getLocation(state, dungeonMedicineId);
    if (playerLocation.dungeonId === dungeonMedicineLocation.dungeonId &&
      ownProps.x === dungeonMedicineLocation.x &&
      ownProps.y === dungeonMedicineLocation.y) {
      itemType = ItemTypes.MEDICINE;
    }
  });

  return {
    itemType: itemType
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
