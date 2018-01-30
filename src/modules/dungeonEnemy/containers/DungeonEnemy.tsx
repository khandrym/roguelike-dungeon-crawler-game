import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
import * as dungeonEnemies from '../../dungeonEnemies';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  dungeonEnemy: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function DungeonEnemy(props: Props) {
  return (
    <components.DungeonEnemy dungeonEnemy={props.dungeonEnemy} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    dungeonEnemy: dungeonEnemies.getDungeonEnemy(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonEnemy);
