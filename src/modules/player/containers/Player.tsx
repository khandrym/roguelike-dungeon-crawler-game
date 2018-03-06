import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import Player from '../components/Player';
import * as store from '../../store';

interface StateProps {
  player: State;
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <Player player={props.player} />
  );
}

function mapStateToProps(state: store.State): StateProps {
  return {
    player: store.getPlayer(state),
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
