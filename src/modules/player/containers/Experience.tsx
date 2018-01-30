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

function Experience(props: Props) {
  return (
    <item.components.Experience value={props.value} />
  );
}

function mapStateToProps(state: store.State): StateProps {
  return {
    value: store.getPlayer(state).experience
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
