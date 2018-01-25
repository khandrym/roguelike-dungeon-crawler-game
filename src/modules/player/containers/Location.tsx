import * as React from 'react';
import { AnyAction } from 'redux';
import { connect, Dispatch } from 'react-redux';
import * as item from '../../item';
import * as store from '../../store';
import * as locations from '../../locations';

interface StateProps {
  locationId: string;
  dungeonName: string;
  x: number;
  y: number;
}

interface DispatchProps {
  dispatch: Dispatch<AnyAction>;
}

interface MergeProps {
  dungeonName: string;
  x: number;
  y: number;
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
      <item.components.Location
        x={this.props.x}
        y={this.props.y}
        dungeonName={this.props.dungeonName}
      />
    );
  }
}

function mapStateToProps(s: store.State): StateProps {
  return {
    locationId: s.player.locationId,
    dungeonName: s.dungeons.byId[s.locations.byId[s.player.locationId].dungeonId].name,
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
    dungeonName: stateProps.dungeonName,
    x: stateProps.x,
    y: stateProps.y,
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
