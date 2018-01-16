import * as React from 'react';
import * as item from '../../item';
import './Enemy.css';

export default () => {
  return (
    <item.components.Wrapper>
      <div className="Enemy">
        <item.components.Name>
          Mad Enemy
        </item.components.Name>
        <item.components.Health value={100} />
      </div>
    </item.components.Wrapper>
  );
};
