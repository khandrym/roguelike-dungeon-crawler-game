import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import WeaponAsItem from '../components/WeaponAsItem';
import * as Weapons from '../../Weapons';
import * as Store from '../../Store';

interface OwnProps {
  id: string;
}

interface StateProps {
  weapon: State;
  children?: JSX.Element;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <WeaponAsItem weapon={props.weapon}>
      {props.children}
    </WeaponAsItem>
  );
}

function mapStateToProps(state: Store.State, ownProps: OwnProps): StateProps {
  return {
    weapon: Weapons.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
