import * as React from 'react';
import { styled } from '../../theme';
import * as player from '../../player';

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
      {/* <Enemy /> */}
    </Wrapper>
  );
};
