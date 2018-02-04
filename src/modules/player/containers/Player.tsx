import * as React from 'react';
import { AnyAction } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { State, MovementTypes, move } from '../model';
import Player from '../components/Player';
import * as store from '../../store';
import * as neighbourItem from '../../neighbourItem';

interface StateProps {
  player: State;
  neighbourItemAtTop: neighbourItem.State;
  neighbourItemAtBottom: neighbourItem.State;
  neighbourItemAtRight: neighbourItem.State;
  neighbourItemAtLeft: neighbourItem.State;
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
    player: store.getPlayer(state),
    neighbourItemAtTop: neighbourItem.getNeighbourItemAtTop(state),
    neighbourItemAtBottom: neighbourItem.getNeighbourItemAtBottom(state),
    neighbourItemAtRight: neighbourItem.getNeighbourItemAtRight(state),
    neighbourItemAtLeft: neighbourItem.getNeighbourItemAtLeft(state)
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
          move(
            dispatchProps.dispatch,
            stateProps.player,
            stateProps.neighbourItemAtRight,
            MovementTypes.RIGHT);
          break;
        case 'ArrowLeft':
          move(
            dispatchProps.dispatch,
            stateProps.player,
            stateProps.neighbourItemAtLeft,
            MovementTypes.LEFT);
          break;
        case 'ArrowUp':
          move(
            dispatchProps.dispatch,
            stateProps.player,
            stateProps.neighbourItemAtTop,
            MovementTypes.UP);
          break;
        case 'ArrowDown':
          move(
            dispatchProps.dispatch,
            stateProps.player,
            stateProps.neighbourItemAtBottom,
            MovementTypes.DOWN);
          break;
        default:
          break;
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Container);
