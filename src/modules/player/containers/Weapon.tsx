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

function Weapon(props: Props) {
  return (
    <weapon.containers.WeaponAsProperty id={props.weaponId} />
  );
}

function mapStateToProps(s: store.State): StateProps {
  return {
    weaponId: store.selectors.getPlayer(s).weaponId
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Weapon);
