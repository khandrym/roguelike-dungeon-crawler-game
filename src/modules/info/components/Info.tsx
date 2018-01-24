import * as React from 'react';
import Wrapper from './Wrapper';
import * as player from '../../player';

import * as dungeon from '../../dungeon';
import * as initials from '../../initials';

export default () => {
  return (
    <Wrapper>
      <player.components.Player />
      <dungeon.containers.Dungeon id={initials.dungeon.gray.id} />
    </Wrapper>
  );
};
