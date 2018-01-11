import * as React from 'react';
import * as theme from '../../theme';
import * as item from '../../item';
import ItemTypes from '../../itemTypes';

interface Props {
  theme?: theme.Theme;
}

export default (props: Props) => {
  return (
    <item.components.Item itemType={ItemTypes.ENEMY}>
      <item.components.ItemName>
        Mad Enemy
      </item.components.ItemName>
      <item.components.ItemHealth value={100} />
    </item.components.Item>
  );
};
