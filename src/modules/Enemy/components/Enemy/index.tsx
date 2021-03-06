import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as Item from '../../../Item';
import * as Weapon from '../../../Weapon';

interface Props {
  enemy: State;
  children?: JSX.Element;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <Item.components.Name name={props.enemy.name} />
      {props.children}
      <Weapon.containers.WeaponAsProperty id={props.enemy.weaponId} />
    </Wrapper>
  );
};
