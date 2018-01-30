import * as React from 'react';
import { AnyAction } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as store from '../../store';
import * as location from '../../location';
import * as locations from '../../locations';

interface StateProps {
  locationId: string;
}

interface DispatchProps {
  dispatch: Dispatch<AnyAction>;
}

interface MergeProps {
  locationId: string;
  onKeyPress: (event: KeyboardEvent) => void;
}

class Location extends React.Component<MergeProps, object> {

  // !!! Is it correct to add event listener with props function?
  // !!! Will the function be removed correctly when component be unmounted?
  public componentWillMount() {
    window.document.addEventListener('keypress', this.props.onKeyPress, false);
  }

  public componentWillUnmount() {
    window.document.removeEventListener('keypress', this.props.onKeyPress, false);
  }

  public render() {
    return (
      <location.containers.LocationAsProperty id={this.props.locationId} />
    );
  }
}

function mapStateToProps(state: store.State): StateProps {
  return {
    locationId: store.getPlayer(state).locationId
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): DispatchProps {
  return {
    dispatch: dispatch
  };
}

function mergeProps(stateProps: StateProps, dispatchProps: DispatchProps): MergeProps {
  return {
    locationId: stateProps.locationId,
    onKeyPress: (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          dispatchProps.dispatch(locations.moveRight(stateProps.locationId));
          break;
        case 'ArrowLeft':
          dispatchProps.dispatch(locations.moveLeft(stateProps.locationId));
          break;
        case 'ArrowUp':
          dispatchProps.dispatch(locations.moveUp(stateProps.locationId));
          break;
        case 'ArrowDown':
          dispatchProps.dispatch(locations.moveDown(stateProps.locationId));
          break;
        default:
          return;
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Location);
