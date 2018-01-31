import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import MedicineAsItem from '../components/MedicineAsItem';
import * as medicines from '../../medicines';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  medicine: State;
  children?: JSX.Element;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <MedicineAsItem medicine={props.medicine}>
      {props.children}
    </MedicineAsItem>
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    medicine: medicines.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
