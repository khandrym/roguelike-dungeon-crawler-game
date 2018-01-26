import * as React from 'react';
import { State } from '../model';

interface Props {
  dungeon: State;
}

export default (props: Props) => {
  return (
    <span>
      {props.dungeon.name} dungeon
    </span>
  );
};
