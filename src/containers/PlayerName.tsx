import * as React from 'react';
import styled from '../theme/styled-components';

const Wrapper = styled.div`
  font-size: ${props => props.theme.fontSizePlayerName};
`;

export default () => {
  return (
    <Wrapper>
      Brave Hero
    </Wrapper>
  );
};
