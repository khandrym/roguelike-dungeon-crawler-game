import * as React from 'react';
import { connect } from 'react-redux';
import * as item from '../../item';
import * as store from '../../store';

interface StateProps {
  name: string;
  attack: number;
}

interface DispatchProps {
}

interface Props extends StateProps, DispatchProps { }

function Weapon(props: Props) {
  return (
    <item.components.Weapon name={props.name} attack={props.attack} />
  );
}

function mapStateToProps(s: store.State): StateProps {
  return {
    name: s.weapons.byId[s.player.weaponId].name,
    attack: s.weapons.byId[s.player.weaponId].attack
  };
}

function mapDispatchToProps(): DispatchProps {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Weapon);
