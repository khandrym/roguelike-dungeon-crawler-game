import * as React from 'react';
import './Property.css';

const ItemProperty: React.StatelessComponent = (props) => {
  return (
    <div className="item-Property">
      {props.children}
    </div>
  );
};

export default ItemProperty;
