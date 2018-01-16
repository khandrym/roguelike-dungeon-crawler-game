import * as React from 'react';
import { connect } from 'react-redux';
import * as item from '../../item';
import * as store from '../../store';

interface StateProps {
  value: number;
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function PlayerLevel(props: Props) {
  return (
    <item.components.Level value={props.value} />
  );
}

function mapStateToProps(s: store.State): StateProps {
  return {
    value: Math.floor(s.player.experience / 10.0)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerLevel);
