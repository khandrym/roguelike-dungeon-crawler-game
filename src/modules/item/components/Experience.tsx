import * as React from 'react';
import Property from './Property';

interface Props {
  value: number;
}

export default (props: Props) => {
  return (
    <Property>
      Level: {Math.floor(props.value / 10.0)} (experience: {props.value})
    </Property>
  );
};
