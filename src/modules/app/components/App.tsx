import * as React from 'react';
import * as title from '../../title';
import * as map from '../../map';
import * as info from '../../info';
import './App.css';

export default () => {
  return (
    <div className="App">
      <title.components.Title />
      <map.components.Map />
      <info.components.Info />
    </div>
  );
};
