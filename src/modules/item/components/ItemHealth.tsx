import * as React from 'react';
import ItemProperty from './ItemProperty';

interface Props {
  value: number;
}

export default (props: Props) => {
  return (
    <ItemProperty>
      Health: {props.value}
    </ItemProperty>
  );
};
