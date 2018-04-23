import * as React from 'react';
import * as Item from '../../../_item';
import './index.css';

const Component: React.StatelessComponent = (props) => {
  return (
    <Item.components.Wrapper>
      <div className="enemy-Wrapper">
        {props.children}
      </div>
    </Item.components.Wrapper>
  );
};

export default Component;
