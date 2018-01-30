import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
import * as dungeonMedicines from '../../dungeonMedicines';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  dungeonMedicine: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function DungeonMedicine(props: Props) {
  return (
    <components.DungeonMedicine dungeonMedicine={props.dungeonMedicine} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    dungeonMedicine: dungeonMedicines.getDungeonMedicine(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DungeonMedicine);
