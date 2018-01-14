import * as React from 'react';
import './ItemProperty.css';

const ItemProperty: React.StatelessComponent = (props) => {
  return (
    <div className="ItemProperty">
      {props.children}
    </div>
  );
};

export default ItemProperty;
