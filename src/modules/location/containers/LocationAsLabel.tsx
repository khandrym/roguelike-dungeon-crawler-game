import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import LocationAsLabel from '../components/LocationAsLabel';
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

function Container(props: Props) {
  return (
    <LocationAsLabel location={props.location} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    location: locations.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
