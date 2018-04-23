import * as React from 'react';
import Wrapper from '../Wrapper';
import { State } from '../../model';
import * as Item from '../../../_item';
import * as Weapon from '../../../_weapon';
import * as Location from '../../../_location';

interface Props {
  player: State;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <Item.components.Name name={props.player.name} />
      <Item.components.Experience value={props.player.experience} />
      <Weapon.containers.WeaponAsProperty id={props.player.weaponId} />
      <Item.components.Health value={props.player.health} />
      <Location.containers.LocationAsProperty id={props.player.locationId} />
    </Wrapper>
  );
};
