import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import components from '../components';
import * as enemies from '../../enemies';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  enemy: State;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Enemy(props: Props) {
  return (
    <components.Enemy enemy={props.enemy} />
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    enemy: enemies.getEnemy(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Enemy);
