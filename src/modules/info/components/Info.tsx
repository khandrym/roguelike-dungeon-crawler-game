import * as React from 'react';
import Wrapper from './Wrapper';
import * as player from '../../player';
import * as enemy from '../../enemy';

export default () => {
  return (
    <Wrapper>
      <player.containers.Player />
      <enemy.components.Enemy />
    </Wrapper>
  );
};
