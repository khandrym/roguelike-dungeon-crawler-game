import * as React from 'react';
import { connect } from 'react-redux';
import * as item from '../../item';
import * as store from '../../store';

interface StateProps {
  name: string;
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <item.components.Name name={props.name} />
  );
}

function mapStateToProps(state: store.State): StateProps {
  return {
    name: store.getPlayer(state).name
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
