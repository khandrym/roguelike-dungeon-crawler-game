import * as React from 'react';
import ItemProperty from './ItemProperty';

interface Props {
  dungeonName: string;
  x: number;
  y: number;
}

export default (props: Props) => {
  return (
    <ItemProperty>
      Location:
      <ItemProperty>
        dungeon: {props.dungeonName}
      </ItemProperty>
      <ItemProperty>
        x: {props.x}
      </ItemProperty>
      <ItemProperty>
        y: {props.y}
      </ItemProperty>
    </ItemProperty>
  );
};
