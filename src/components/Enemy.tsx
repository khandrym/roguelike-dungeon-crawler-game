import * as React from 'react';
import Item from '../components/Item';
import { ItemTypes } from '../components/Item';
import ItemName from '../components/ItemName';
import QualityHealth from '../components/QualityHealth';

export default () => {
  return (
    <Item itemType={ItemTypes.ENEMY}>
      <ItemName>
        Mad Enemy
      </ItemName>
      <QualityHealth value={100} />
    </Item>
  );
};
