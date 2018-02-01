import * as React from 'react';
import { AnyAction } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { State } from '../model';
import Player from '../components/Player';
import * as store from '../../store';
import * as locations from '../../locations';

interface StateProps {
  player: State;
}

interface DispatchProps {
  dispatch: Dispatch<AnyAction>;
}

interface MergeProps {
  player: State;
  onKeyPress: (event: KeyboardEvent) => void;
}

class Container extends React.Component<MergeProps, object> {

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
      <Player player={this.props.player} />
    );
  }
}

function mapStateToProps(state: store.State): StateProps {
  return {
    player: store.getPlayer(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): DispatchProps {
  return {
    dispatch: dispatch
  };
}

function mergeProps(stateProps: StateProps, dispatchProps: DispatchProps): MergeProps {
  return {
    player: stateProps.player,
    onKeyPress: (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          dispatchProps.dispatch(locations.moveRight(stateProps.player.locationId));
          break;
        case 'ArrowLeft':
          dispatchProps.dispatch(locations.moveLeft(stateProps.player.locationId));
          break;
        case 'ArrowUp':
          dispatchProps.dispatch(locations.moveUp(stateProps.player.locationId));
          break;
        case 'ArrowDown':
          dispatchProps.dispatch(locations.moveDown(stateProps.player.locationId));
          break;
        default:
          return;
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Container);
