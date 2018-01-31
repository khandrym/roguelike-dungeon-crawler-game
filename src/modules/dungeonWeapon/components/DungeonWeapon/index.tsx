import * as React from 'react';
import { State } from '../../model';
import * as weapon from '../../../weapon';
import * as location from '../../../location';

interface Props {
  readonly dungeonWeapon: State;
}

export default (props: Props) => {
  return (
    <weapon.containers.WeaponAsItem id={props.dungeonWeapon.weaponId}>
      <location.containers.LocationAsProperty id={props.dungeonWeapon.locationId} />
    </weapon.containers.WeaponAsItem>
  );
};
