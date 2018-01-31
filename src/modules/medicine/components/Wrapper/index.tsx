import * as React from 'react';
import * as item from '../../../item';
import './index.css';

const Component: React.StatelessComponent = (props) => {
  return (
    <item.components.Wrapper>
      <div className="medicine-Wrapper">
        {props.children}
      </div>
    </item.components.Wrapper>
  );
};

export default Component;
