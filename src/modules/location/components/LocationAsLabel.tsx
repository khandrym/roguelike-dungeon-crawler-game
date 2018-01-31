import * as React from 'react';
import { State } from '../model';
import * as dungeon from '../../dungeon';

interface Props {
  location: State;
}

export default (props: Props) => {
  return (
    <span>
      <dungeon.containers.DungeonAsLabel id={props.location.dungeonId} />
      {' '}
      [{props.location.x}, {props.location.y}]
    </span>
  );
};