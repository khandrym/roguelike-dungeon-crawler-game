import * as React from 'react';
import styled from '../theme/styled-components';
import Player from '../components/Player';
import Enemy from '../components/Enemy';

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
      <Player />
      <Enemy />
    </Wrapper>
  );
};
