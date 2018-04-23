import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../model';
import Enemy from '../components/Enemy';
import * as Enemies from '../../_enemies';
import * as Store from '../../_store';

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

function mapStateToProps(state: Store.State, ownProps: OwnProps): StateProps {
  return {
    enemy: Enemies.getOne(state, ownProps.id)
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
