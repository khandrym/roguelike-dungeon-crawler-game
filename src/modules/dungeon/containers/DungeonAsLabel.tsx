import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import DungeonAsLabel from '../components/DungeonAsLabel';
import * as dungeons from '../../dungeons';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  dungeon: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <DungeonAsLabel dungeon={props.dungeon} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    dungeon: dungeons.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
