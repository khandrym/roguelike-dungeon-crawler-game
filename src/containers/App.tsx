import * as React from 'react';
import { ThemeProvider } from '../theme/styled-components';
import { theme } from '../theme/theme';
import AppWrapper from '../components/AppWrapper';
import Title from '../components/Title';
import Map from '../components/Map';
import Info from '../components/Info';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper >
          <Title />
          <Map />
          <Info />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
