import * as React from 'react';
import { connect } from 'react-redux';
import Cell from '../components/Cell';
import ItemTypes from '../../itemTypes';
import * as store from '../../store';
import * as locations from '../../locations';

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
  if (ownProps.x === locations.getLocation(state, store.getPlayer(state).locationId).x &&
    ownProps.y === locations.getLocation(state, store.getPlayer(state).locationId).y) {
    itemType = ItemTypes.PLAYER;
  }

  return {
    itemType: itemType
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
