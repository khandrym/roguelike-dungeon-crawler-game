import * as React from 'react';
import { connect } from 'react-redux';
import * as item from '../../item';
import * as store from '../../store';

interface StateProps {
  experience: number;
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function Level(props: Props) {
  return (
    <item.components.Level experience={props.experience} />
  );
}

function mapStateToProps(s: store.State): StateProps {
  return {
    experience: s.player.experience
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Level);
