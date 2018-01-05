import * as React from 'react';
import ItemProperty from './ItemProperty';

interface Props {
  name: string;
  attack: number;
}

export default (props: Props) => {
  return (
    <ItemProperty>
      Weapon:
      <ItemProperty>
        name: {props.name}
      </ItemProperty>
      <ItemProperty>
        attack: {props.attack}
      </ItemProperty>
    </ItemProperty>
  );
};
