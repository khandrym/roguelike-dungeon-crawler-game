import * as React from 'react';
import { styled } from '../../theme';

const Wrapper = styled.div`
  font-size: ${props => props.theme.fontSizeTitle};
  margin: 30px;
`;

export default () => {
  return (
    <Wrapper>
      Roguelike Dungeon Crawler Game
    </Wrapper>
  );
};
