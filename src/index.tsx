import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import * as ReactRedux from 'react-redux';
import './index.css';
import store from './modules/store';
import * as app from './modules/app';
import './modules/interaction';

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <app.components.App />
  </ReactRedux.Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
