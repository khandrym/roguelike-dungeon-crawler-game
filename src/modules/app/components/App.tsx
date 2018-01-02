import * as React from 'react';
import * as theme from '../../theme';
import { styled } from '../../theme';
import * as title from '../../title';
import * as map from '../../map';
import * as info from '../../info';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.colorPrimary};
`;

export default () => {
  return (
    <theme.ThemeProvider theme={theme.theme}>
      <Wrapper>
        <title.components.Title />
        <map.components.Map />
        <info.components.Info />
      </Wrapper>
    </theme.ThemeProvider>
  );
};
