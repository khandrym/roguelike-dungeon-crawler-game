import * as React from 'react';
import { State } from '../../model';
import * as Item from '../../../_item';
import * as Dungeon from '../../../_dungeon';

interface Props {
  location: State;
}

export default (props: Props) => {
  return (
    <Item.components.Property>
      Location:
      {' '}
      <Dungeon.containers.DungeonAsLabel id={props.location.dungeonId} />
      {' '}
      [{props.location.x}, {props.location.y}]
    </Item.components.Property>
  );
};
