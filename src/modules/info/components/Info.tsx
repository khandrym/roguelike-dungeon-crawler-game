import * as React from 'react';
import { styled } from '../../theme';
import * as player from '../../player';
import * as enemy from '../../enemy';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export default () => {
  return (
    <Wrapper>
      <player.components.Player />
      <enemy.components.Enemy />
    </Wrapper>
  );
};
