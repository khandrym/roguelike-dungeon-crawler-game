import * as React from 'react';
import './index.css';

const Component: React.StatelessComponent = (props) => {
  return (
    <div className="app-Wrapper">
      {props.children}
    </div>
  );
};

export default Component;
