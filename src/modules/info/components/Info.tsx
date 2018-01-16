import * as React from 'react';
import Wrapper from './Wrapper';
import * as player from '../../player';

export default () => {
  return (
    <Wrapper>
      <player.containers.Player />
    </Wrapper>
  );
};
