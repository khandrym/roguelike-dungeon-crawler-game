import * as React from 'react';
import Item from '../components/Item';
import { ItemTypes } from '../components/Item';
import PlayerName from '../components/PlayerName';

export default () => {
  return (
    <Item itemType={ItemTypes.PLAYER}>
      <PlayerName />
    </Item>
  );
};
