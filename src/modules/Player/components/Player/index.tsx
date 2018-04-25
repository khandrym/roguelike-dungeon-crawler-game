import * as React from 'react';
import Wrapper from '../Wrapper';
import { State } from '../../model';
import * as Item from '../../../Item';
import * as Weapon from '../../../Weapon';
import * as Location from '../../../Location';

interface Props {
  player: State;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <Item.components.Name name={props.player.name} />
      <Item.components.Health value={props.player.health} />
      <Item.components.Experience value={props.player.experience} />
      <Location.containers.LocationAsProperty id={props.player.locationId} />
      <Weapon.containers.WeaponAsProperty id={props.player.weaponId} />
    </Wrapper>
  );
};
