import * as React from 'react';
import { AnyAction } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as item from '../../item';
import * as store from '../../store';
import * as locations from '../../locations';

interface StateProps {
  locationId: string;
  x: number;
  y: number;
}

interface DispatchProps {
  dispatch: Dispatch<AnyAction>;
}

interface MergeProps {
  x: number;
  y: number;
  onKeyPress: (event: KeyboardEvent) => void;
}

class PlayerLocation extends React.Component<MergeProps, object> {

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
      <item.components.ItemLocation x={this.props.x} y={this.props.y} />
    );
  }
}

function mapStateToProps(s: store.State): StateProps {
  return {
    locationId: s.player.locationId,
    x: s.locations.byId[s.player.locationId].x,
    y: s.locations.byId[s.player.locationId].y
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): DispatchProps {
  return {
    dispatch: dispatch
  };
}

function mergeProps(stateProps: StateProps, dispatchProps: DispatchProps): MergeProps {
  return {
    x: stateProps.x,
    y: stateProps.y,
    onKeyPress: (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          dispatchProps.dispatch(locations.actions.moveRight(stateProps.locationId));
          break;
        case 'ArrowLeft':
          dispatchProps.dispatch(locations.actions.moveLeft(stateProps.locationId));
          break;
        case 'ArrowUp':
          dispatchProps.dispatch(locations.actions.moveUp(stateProps.locationId));
          break;
        case 'ArrowDown':
          dispatchProps.dispatch(locations.actions.moveDown(stateProps.locationId));
          break;
        default:
          return;
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PlayerLocation);