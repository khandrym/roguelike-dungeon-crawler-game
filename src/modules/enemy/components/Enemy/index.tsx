import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as item from '../../../item';
import * as weapon from '../../../weapon';

interface Props {
  enemy: State;
  children?: JSX.Element;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.enemy.name} />
      <item.components.Experience value={props.enemy.experience} />
      <weapon.containers.WeaponAsProperty id={props.enemy.weaponId} />
      {props.children}
    </Wrapper>
  );
};
