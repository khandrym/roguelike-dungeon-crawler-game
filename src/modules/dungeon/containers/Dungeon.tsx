import * as React from 'react';
import { connect } from 'react-redux';
import * as store from '../../store';
import * as dungeons from '../../dungeons';
import Dungeon from '../components/Dungeon';
import { State } from '../model';

interface OwnProps {
  id: string;
}

interface StateProps {
  dungeon: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function DungeonContainer(props: Props) {
  return (
    <Dungeon dungeon={props.dungeon} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    dungeon: dungeons.selectors.getDungeon(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonContainer);
