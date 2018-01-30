import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
import * as dungeonWeapons from '../../dungeonWeapons';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  dungeonWeapons: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function DungeonEnemy(props: Props) {
  return (
    <components.DungeonWeapon dungeonWeapon={props.dungeonWeapons} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    dungeonWeapons: dungeonWeapons.getDungeonWeapon(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonEnemy);
