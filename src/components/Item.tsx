import * as React from 'react';
import styled from '../theme/styled-components';
import ItemName from '../components/ItemName';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${props => props.theme.colorEnemy}
`;

export default () => {
  return (
    <Wrapper>
      <ItemName />
    </Wrapper>
  );
};
