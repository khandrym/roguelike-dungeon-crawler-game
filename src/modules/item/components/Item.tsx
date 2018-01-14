import * as React from 'react';
import './Item.css';

const Item: React.StatelessComponent = (props) => {
  return (
    <div className="Item">
      {props.children}
    </div>
  );
};

export default Item;
