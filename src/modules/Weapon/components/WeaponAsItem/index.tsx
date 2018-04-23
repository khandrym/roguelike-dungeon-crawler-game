import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as Item from '../../../Item';

interface Props {
  weapon: State;
  children?: JSX.Element;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <Item.components.Name name={props.weapon.name} />
      <Item.components.Property>
        Attack: {props.weapon.attack}
      </Item.components.Property>
      {props.children}
    </Wrapper>
  );
};
