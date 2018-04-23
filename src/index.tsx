import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as Store from './modules/_store';
import * as App from './modules/_app';
import './modules/_interaction';

ReactDOM.render(
  <Store.components.Provider>
    <App.components.App />
  </Store.components.Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
