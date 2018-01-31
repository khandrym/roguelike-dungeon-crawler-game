import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import WeaponAsItem from '../components/WeaponAsItem';
import * as weapons from '../../weapons';
import * as store from '../../store';

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

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    weapon: weapons.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
