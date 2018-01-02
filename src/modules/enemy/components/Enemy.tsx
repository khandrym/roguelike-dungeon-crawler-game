import * as React from 'react';
import * as theme from '../../theme';
import * as item from '../../item';

interface Props {
  theme?: theme.Theme;
}

export default (props: Props) => {
  return (
    <item.components.Item itemType={item.ItemTipes.ENEMY}>
      <item.components.ItemName>
        Mad Enemy
      </item.components.ItemName>
      <item.components.ItemHealth value={100} />
    </item.components.Item>
  );
};
