import * as React from 'react';
import styled from '../theme/styled-components';
import PlayerName from '../containers/PlayerName';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export default () => {
  return (
    <Wrapper>
      <PlayerName />
    </Wrapper>
  );
};
