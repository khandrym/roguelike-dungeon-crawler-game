import * as React from 'react';
import { connect } from 'react-redux';
import * as item from '../../item';
import * as store from '../../store';

interface StateProps {
  x: number;
  y: number;
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function PlayerLocation(props: Props) {
  return (
    <item.components.ItemLocation x={props.x} y={props.y} />
  );
}

function mapStateToProps(s: store.State): StateProps {
  return {
    x: s.locations.byId[s.player.locationId].x,
    y: s.locations.byId[s.player.locationId].y
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerLocation);
