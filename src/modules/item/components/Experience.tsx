import * as React from 'react';
import Property from './Property';

interface Props {
  value: number;
}

export default (props: Props) => {
  return (
    <Property>
      Experience: {props.value}
    </Property>
  );
};
