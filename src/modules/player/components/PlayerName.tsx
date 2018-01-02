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

function PlayerName(props: Props) {
  return (
    <item.components.ItemName>
      {props.name}
    </item.components.ItemName>
  );
};

function mapStateToProps(store: store.State): StateProps {
  return {
    name: store.player.name
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerName);
