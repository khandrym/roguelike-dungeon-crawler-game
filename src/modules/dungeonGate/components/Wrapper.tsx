import * as React from 'react';
import * as item from '../../item';
import './Wrapper.css';

const Wrapper: React.StatelessComponent = (props) => {
  return (
    <item.components.Wrapper>
      <div className="dungeonGate-Wrapper">
        {props.children}
      </div>
    </item.components.Wrapper>
  );
};

export default Wrapper;
