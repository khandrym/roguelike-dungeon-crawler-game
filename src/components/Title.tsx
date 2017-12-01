import * as React from 'react';
import styled from '../theme/styled-components';

const Wrapper = styled.div`
  font-size: ${props => props.theme.fontSizeTitle};
  margin: 30px;
`;

export default function Title() {
  return (
    <Wrapper>
      Roguelike Dungeon Crawler Game
    </Wrapper>
  );
}
