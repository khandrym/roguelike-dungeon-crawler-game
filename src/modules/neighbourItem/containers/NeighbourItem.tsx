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
  getNeighbourItem: (state: store.State) => State;
}

interface StateProps {
  neighbourItemView: JSX.Element;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return props.neighbourItemView;
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  let neighbourItemView: JSX.Element;
  const neighbourItem = ownProps.getNeighbourItem(state);
  switch (neighbourItem.itemType) {
    case ItemTypes.ENEMY:
      neighbourItemView = <dungeonEnemy.containers.DungeonEnemy id={neighbourItem.itemId} />;
      break;
    case ItemTypes.GATE:
      neighbourItemView = <dungeonGate.containers.DungeonGate id={neighbourItem.itemId} />;
      break;
    case ItemTypes.MEDICINE:
      neighbourItemView = <dungeonMedicine.containers.DungeonMedicine id={neighbourItem.itemId} />;
      break;
    case ItemTypes.WEAPON:
      neighbourItemView = <dungeonWeapon.containers.DungeonWeapon id={neighbourItem.itemId} />;
      break;
    default:
      neighbourItemView = <div />;
      break;
  }
  return {
    neighbourItemView: neighbourItemView
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
