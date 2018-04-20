import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import * as store from '../../store';
import ItemTypes from '../../itemTypes';
import * as dungeonEnemy from '../../dungeonEnemy';
import * as dungeonGate from '../../dungeonGate';
import * as dungeonMedicine from '../../dungeonMedicine';
import * as dungeonWeapon from '../../dungeonWeapon';

interface OwnProps {
  getNeighborItem: (state: store.State) => State;
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

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  let neighborItemView: JSX.Element;
  const neighborItem = ownProps.getNeighborItem(state);
  switch (neighborItem.itemType) {
    case ItemTypes.DUNGEON_ENEMY:
      neighborItemView = <dungeonEnemy.containers.DungeonEnemy id={neighborItem.itemId} />;
      break;
    case ItemTypes.DUNGEON_GATE:
      neighborItemView = <dungeonGate.containers.DungeonGate id={neighborItem.itemId} />;
      break;
    case ItemTypes.DUNGEON_MEDICINE:
      neighborItemView = <dungeonMedicine.containers.DungeonMedicine id={neighborItem.itemId} />;
      break;
    case ItemTypes.DUNGEON_WEAPON:
      neighborItemView = <dungeonWeapon.containers.DungeonWeapon id={neighborItem.itemId} />;
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
