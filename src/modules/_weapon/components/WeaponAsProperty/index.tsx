import * as React from 'react';
import { State } from '../../model';
import * as Item from '../../../_item';

interface Props {
  weapon: State;
}

export default (props: Props) => {
  return (
    <Item.components.Property>
      Weapon: {props.weapon.name} (attack: {props.weapon.attack})
    </Item.components.Property>
  );
};
