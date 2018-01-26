import * as React from 'react';
import { State } from '../model';

interface Props {
  medicine: State;
}

export default (props: Props) => {
  return (
    <span>
      {props.medicine.name}
    </span>
  );
};
