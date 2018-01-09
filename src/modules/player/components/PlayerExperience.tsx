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

function PlayerExperience(props: Props) {
  return (
    <item.components.ItemExperience value={props.value} />
  );
}

function mapStateToProps(s: store.State): StateProps {
  return {
    value: s.player.experience
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerExperience);
