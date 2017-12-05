import * as React from 'react';
import Quality from '../components/Quality';

interface Props {
  value: number;
}

export default (props: Props) => {
  return (
    <Quality>
      Health: {props.value}
    </Quality>
  );
};
