import * as React from 'react';
import './Wrapper.css';

const Wrapper: React.StatelessComponent = (props) => {
  return (
    <div className="item-Wrapper">
      {props.children}
    </div>
  );
};

export default Wrapper;
