import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as store from './modules/store';
import * as app from './modules/app';
import './modules/interaction';

ReactDOM.render(
  <store.components.Provider>
    <app.components.App />
  </store.components.Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
