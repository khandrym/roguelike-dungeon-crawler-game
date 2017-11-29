import * as React from 'react';
import { ThemeProvider } from '../theme/styled-components';
import { theme } from '../theme/theme';
import AppWrapper from '../components/AppWrapper';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper >
          Hello from the App!
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
