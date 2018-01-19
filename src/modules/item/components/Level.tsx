import * as React from 'react';
import Property from './Property';

interface Props {
  experience: number;
}

export default (props: Props) => {
  return (
    <Property>
      Level: {Math.floor(props.experience / 10.0)}
    </Property>
  );
};
