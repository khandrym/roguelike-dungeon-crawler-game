import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
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

function Dungeon(props: Props) {
  return (
    <components.Dungeon dungeon={props.dungeon} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    dungeon: dungeons.getDungeon(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dungeon);
