import * as React from 'react';
import { State } from '../../model';
import Wrapper from '../Wrapper';
import * as item from '../../../item';

interface Props {
  medicine: State;
  children?: JSX.Element;
}

export default (props: Props) => {
  return (
    <Wrapper>
      <item.components.Name name={props.medicine.name} />
      {props.children}
    </Wrapper>
  );
};
