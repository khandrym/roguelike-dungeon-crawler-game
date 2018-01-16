import * as React from 'react';
import './Name.css';

const Name: React.StatelessComponent = (props) => {
  return (
    <div className="item-Name">
      {props.children}
    </div>
  );
};

export default Name;
