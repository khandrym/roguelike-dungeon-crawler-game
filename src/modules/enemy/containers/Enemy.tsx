import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import Enemy from '../components/Enemy';
import * as enemies from '../../enemies';
import * as store from '../../store';

interface OwnProps {
  id: string;
}

interface StateProps {
  enemy: State;
  children?: JSX.Element;
}

interface DispatchProps {
}

interface Props extends OwnProps, StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <Enemy enemy={props.enemy}>
      {props.children}
    </Enemy>
  );
}

function mapStateToProps(state: store.State, ownProps: OwnProps): StateProps {
  return {
    enemy: enemies.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
