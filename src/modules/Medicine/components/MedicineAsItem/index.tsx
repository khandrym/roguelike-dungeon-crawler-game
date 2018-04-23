import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as Item from '../../../Item';

interface Props {
  medicine: State;
  children?: JSX.Element;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <Item.components.Name name={props.medicine.name} />
      {props.children}
    </Wrapper>
  );
};
