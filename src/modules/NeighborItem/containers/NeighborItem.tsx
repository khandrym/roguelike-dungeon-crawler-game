import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import * as Store from '../../Store';
import ItemTypes from '../../ItemTypes';
import * as DungeonEnemy from '../../DungeonEnemy';
import * as DungeonGate from '../../DungeonGate';
import * as DungeonMedicine from '../../DungeonMedicine';
import * as DungeonWeapon from '../../DungeonWeapon';

interface OwnProps {
  getNeighborItem: (state: Store.State) => State;
}

interface StateProps {
  neighborItemView: JSX.Element;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return props.neighborItemView;
}

function mapStateToProps(state: Store.State, ownProps: OwnProps): StateProps {
  let neighborItemView: JSX.Element;
  const neighborItem = ownProps.getNeighborItem(state);
  switch (neighborItem.itemType) {
    case ItemTypes.DUNGEON_ENEMY:
      neighborItemView = <DungeonEnemy.containers.DungeonEnemy id={neighborItem.itemId} />;
      break;
    case ItemTypes.DUNGEON_GATE:
      neighborItemView = <DungeonGate.containers.DungeonGate id={neighborItem.itemId} />;
      break;
    case ItemTypes.DUNGEON_MEDICINE:
      neighborItemView = <DungeonMedicine.containers.DungeonMedicine id={neighborItem.itemId} />;
      break;
    case ItemTypes.DUNGEON_WEAPON:
      neighborItemView = <DungeonWeapon.containers.DungeonWeapon id={neighborItem.itemId} />;
      break;
    default:
      neighborItemView = <div />;
      break;
  }
  return {
    neighborItemView: neighborItemView
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
