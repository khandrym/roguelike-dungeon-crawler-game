import * as React from 'react';
import { State } from '../model';
import Wrapper from './Wrapper';
import * as item from '../../item';

interface Props {
  weapon: State;
  children?: JSX.Element;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.weapon.name} />
      <item.components.Property>
        Attack: {props.weapon.attack}
      </item.components.Property>
      {props.children}
    </Wrapper>
  );
};
