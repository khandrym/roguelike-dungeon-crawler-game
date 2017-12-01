import * as React from 'react';
import styled from '../theme/styled-components';

const Wrapper = styled.div`
  font-size: ${props => props.theme.fontSizeInfoName};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  margin-bottom: 10px;
`;

export default () => {
  return (
    <Wrapper>
      Item
    </Wrapper>
  );
};
