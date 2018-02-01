import * as React from 'react';
import Wrapper from '../Wrapper';
import { State } from '../../model';
import * as item from '../../../item';
import * as weapon from '../../../weapon';
import * as location from '../../../location';

interface Props {
  player: State;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.player.name} />
      <item.components.Experience value={props.player.experience} />
      <weapon.containers.WeaponAsProperty id={props.player.weaponId} />
      <item.components.Health value={props.player.health} />
      <location.containers.LocationAsProperty id={props.player.locationId} />
    </Wrapper>
  );
};
