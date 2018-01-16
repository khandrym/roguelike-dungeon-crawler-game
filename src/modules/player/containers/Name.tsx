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

function Name(props: Props) {
  return (
    <item.components.Name>
      {props.name}
    </item.components.Name>
  );
}

function mapStateToProps(s: store.State): StateProps {
  return {
    name: s.player.name
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);
