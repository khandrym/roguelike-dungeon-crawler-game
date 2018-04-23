import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import DungeonEnemy from '../components/DungeonEnemy';
import * as DungeonEnemies from '../../_dungeonEnemies';
import * as Store from '../../_store';

interface OwnProps {
  id: string;
}

interface StateProps {
  dungeonEnemy: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <DungeonEnemy dungeonEnemy={props.dungeonEnemy} />
  );
}

function mapStateToProps(state: Store.State, ownProps: OwnProps): StateProps {
  return {
    dungeonEnemy: DungeonEnemies.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
