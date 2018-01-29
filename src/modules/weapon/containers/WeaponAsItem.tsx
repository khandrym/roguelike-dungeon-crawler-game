import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
import * as weapons from '../../weapons';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  weapon: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function WeaponAsItem(props: Props) {
  return (
    <components.WeaponAsItem weapon={props.weapon} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    weapon: weapons.getWeapon(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(WeaponAsItem);
