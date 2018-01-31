import * as React from 'react';
import { connect } from 'react-redux';
import * as store from '../../store';

interface StateProps {
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <div>
      Dungeon Item
    </div>
  );
}

function mapStateToProps(state: store.State): StateProps {
  return {
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
