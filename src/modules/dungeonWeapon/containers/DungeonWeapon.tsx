import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import DungeonWeapon from '../components/DungeonWeapon';
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

function Container(props: Props) {
  return (
    <DungeonWeapon dungeonWeapon={props.dungeonWeapons} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    dungeonWeapons: dungeonWeapons.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
