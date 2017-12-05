import * as React from 'react';
import Item from '../components/Item';
import { ItemTypes } from '../components/Item';
import PlayerName from '../components/PlayerName';
import QualityHealth from '../components/QualityHealth';

export default () => {
  return (
    <Item itemType={ItemTypes.PLAYER}>
      <PlayerName />
      <QualityHealth value={100} />
    </Item>
  );
};
