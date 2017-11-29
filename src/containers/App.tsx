import * as React from 'react';
import { ThemeProvider } from '../theme/styled-components';
import { theme } from '../theme/theme';
import AppWrapper from '../components/AppWrapper';
import Title from '../components/Title';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper >
          <Title />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
