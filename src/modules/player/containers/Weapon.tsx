import * as React from 'react';
import { connect } from 'react-redux';
import * as store from '../../store';
import * as weapon from '../../weapon';

interface StateProps {
  weaponId: string;
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function Container(props: Props) {
  return (
    <weapon.containers.WeaponAsProperty id={props.weaponId} />
  );
}

function mapStateToProps(state: store.State): StateProps {
  return {
    weaponId: store.getPlayer(state).weaponId
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
