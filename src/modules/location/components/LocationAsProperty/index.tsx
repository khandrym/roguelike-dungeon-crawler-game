import * as React from 'react';
import { State } from '../../model';
import * as item from '../../../item';
import * as dungeon from '../../../dungeon';

interface Props {
  location: State;
}

export default (props: Props) => {
  return (
    <item.components.Property>
      Location:
      {' '}
      <dungeon.containers.DungeonAsLabel id={props.location.dungeonId} />
      {' '}
      [{props.location.x}, {props.location.y}]
    </item.components.Property>
  );
};
