import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
import * as locations from '../../locations';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  location: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Location(props: Props) {
  return (
    <components.Location location={props.location} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    location: locations.getLocation(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);
