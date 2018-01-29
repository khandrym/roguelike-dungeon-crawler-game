import * as React from 'react';
import { State } from '../model';
import * as item from '../../item';

interface Props {
  weapon: State;
}

export default (props: Props) => {
  return (
    <item.components.Property>
      Weapon: {props.weapon.name} (attack: {props.weapon.attack})
    </item.components.Property>
  );
};
