import * as React from 'react';
import './index.css';

interface Props {
  name: string;
}

export default (props: Props) => {
  return (
    <div className="Item-Name">
      {props.name}
    </div>
  );
};
