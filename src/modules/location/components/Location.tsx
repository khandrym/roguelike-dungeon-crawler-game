import * as React from 'react';
import { State } from '../model';
import * as item from '../../item';

interface Props {
  location: State;
}

export default (props: Props) => {
  return (
    <item.components.Property>
      Location: [{props.location.x}, {props.location.y}]
    </item.components.Property>
  );
};
