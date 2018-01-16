import * as React from 'react';
import Property from './Property';

interface Props {
  name: string;
  attack: number;
}

export default (props: Props) => {
  return (
    <Property>
      Weapon:
      <Property>
        name: {props.name}
      </Property>
      <Property>
        attack: {props.attack}
      </Property>
    </Property>
  );
};
