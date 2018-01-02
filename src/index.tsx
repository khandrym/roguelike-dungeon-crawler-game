import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import './index.css';
import * as store from './modules/store';
import * as app from './modules/app';

const appStore = Redux.createStore(
  store.reducer,
  store.model.initialState,
  devToolsEnhancer({}));

ReactDOM.render(
  <ReactRedux.Provider store={appStore}>
    <app.components.App />
  </ReactRedux.Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
