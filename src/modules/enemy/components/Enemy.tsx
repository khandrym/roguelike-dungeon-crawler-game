import * as React from 'react';
import * as item from '../../item';
import './Enemy.css';

export default () => {
  return (
    <item.components.Item>
      <div className="Enemy">
        <item.components.ItemName>
          Mad Enemy
        </item.components.ItemName>
        <item.components.ItemHealth value={100} />
      </div>
    </item.components.Item>
  );
};
