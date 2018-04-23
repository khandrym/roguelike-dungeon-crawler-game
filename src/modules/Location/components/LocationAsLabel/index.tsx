import * as React from 'react';
import { State } from '../../model';
import * as Dungeon from '../../../Dungeon';

interface Props {
  location: State;
}

export default (props: Props) => {
  return (
    <span>
      <Dungeon.containers.DungeonAsLabel id={props.location.dungeonId} />
      {' '}
      [{props.location.x}, {props.location.y}]
    </span>
  );
};
