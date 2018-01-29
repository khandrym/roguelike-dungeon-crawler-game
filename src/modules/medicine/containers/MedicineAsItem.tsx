import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
import * as medicines from '../../medicines';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  medicine: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function MedicineAsItem(props: Props) {
  return (
    <components.MedicineAsItem medicine={props.medicine} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    medicine: medicines.getMedicine(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicineAsItem);
