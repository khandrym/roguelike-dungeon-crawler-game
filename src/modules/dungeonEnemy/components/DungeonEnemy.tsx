import * as React from 'react';
import Wrapper from './Wrapper';
import * as item from '../../item';
import * as weapon from '../../weapon';
import * as location from '../../location';

interface Props {
  readonly name: string;
  readonly health: number;
  readonly experience: number;
  readonly weaponId: string;
  readonly locationId: string;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.name} />
      <item.components.Health value={props.health} />
      <item.components.Level experience={props.experience} />
      <item.components.Experience value={props.experience} />
      <weapon.containers.WeaponAsProperty id={props.weaponId} />
      <location.containers.LocationAsProperty id={props.locationId} />
    </Wrapper>
  );
};
