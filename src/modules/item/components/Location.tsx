import * as React from 'react';
import Property from './Property';

interface Props {
  dungeonName: string;
  x: number;
  y: number;
}

export default (props: Props) => {
  return (
    <Property>
      Location:
      <Property>
        dungeon: {props.dungeonName}
      </Property>
      <Property>
        x: {props.x}
      </Property>
      <Property>
        y: {props.y}
      </Property>
    </Property>
  );
};
