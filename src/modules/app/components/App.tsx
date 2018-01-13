import * as React from 'react';
import * as theme from '../../theme';
import * as title from '../../title';
import * as map from '../../map';
import * as info from '../../info';
import './App.css';

export default () => {
  return (
    <theme.ThemeProvider theme={theme.theme}>
      <div className="App">
        <title.components.Title />
        <map.components.Map />
        <info.components.Info />
      </div>
    </theme.ThemeProvider>
  );
};
