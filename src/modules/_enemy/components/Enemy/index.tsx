import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as Item from '../../../_item';
import * as Weapon from '../../../_weapon';

interface Props {
  enemy: State;
  children?: JSX.Element;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <Item.components.Name name={props.enemy.name} />
      <Item.components.Experience value={props.enemy.experience} />
      <Weapon.containers.WeaponAsProperty id={props.enemy.weaponId} />
      {props.children}
    </Wrapper>
  );
};
