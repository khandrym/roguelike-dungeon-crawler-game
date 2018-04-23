import * as React from 'react';
import { State } from '../../model';
import * as Weapon from '../../../Weapon';
import * as Location from '../../../Location';

interface Props {
  readonly dungeonWeapon: State;
}

export default (props: Props) => {
  return (
    <Weapon.containers.WeaponAsItem id={props.dungeonWeapon.weaponId}>
      <Location.containers.LocationAsProperty id={props.dungeonWeapon.locationId} />
    </Weapon.containers.WeaponAsItem>
  );
};
