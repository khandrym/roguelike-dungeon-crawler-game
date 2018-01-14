import * as React from 'react';
import './ItemName.css';

const ItemName: React.StatelessComponent = (props) => {
  return (
    <div className="ItemName">
      {props.children}
    </div>
  );
};

export default ItemName;
