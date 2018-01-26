import * as React from 'react';
import { State } from '../model';
import * as item from '../../item';

interface Props {
  dungeon: State;
}

export default (props: Props) => {
  return (
    <item.components.Property>
      {props.dungeon.name} dungeon
    </item.components.Property>
  );
};
