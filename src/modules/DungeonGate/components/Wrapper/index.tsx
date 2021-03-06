import * as React from 'react';
import * as Item from '../../../Item';
import './index.css';

const Component: React.StatelessComponent = (props) => {
  return (
    <Item.components.Wrapper>
      <div className="DungeonGate-Wrapper">
        {props.children}
      </div>
    </Item.components.Wrapper>
  );
};

export default Component;
