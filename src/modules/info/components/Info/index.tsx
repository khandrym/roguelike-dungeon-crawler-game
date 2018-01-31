import * as React from 'react';
import Wrapper from '../Wrapper';
import * as player from '../../../player';
import * as dungeonItem from '../../../dungeonItem';

export default () => {
  return (
    <Wrapper>
      <player.components.Player />
      <dungeonItem.containers.DungeonItem />
    </Wrapper>
  );
};
