import * as React from 'react';
import './index.css';

const component: React.StatelessComponent = (props) => {
  return (
    <div className="app-Wrapper">
      {props.children}
    </div>
  );
};

export default component;
