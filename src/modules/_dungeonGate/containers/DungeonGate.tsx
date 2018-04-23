import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import DungeonGate from '../components/DungeonGate';
import * as DungeonGates from '../../_dungeonGates';
import * as Store from '../../_store';

interface OwnProps {
  id: string;
}

interface StateProps {
  dungeonGate: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <DungeonGate dungeonGate={props.dungeonGate} />
  );
}

function mapStateToProps(state: Store.State, ownProps: OwnProps): StateProps {
  return {
    dungeonGate: DungeonGates.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
