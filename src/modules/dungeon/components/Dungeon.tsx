import * as React from 'react';
import { State } from '../model';
import * as item from '../../item';

interface Props {
  dungeon: State;
}

export default (props: Props) => {
  return (
    <item.components.Property>
      dungeon: {props.dungeon.name}
    </item.components.Property>
  );
};
