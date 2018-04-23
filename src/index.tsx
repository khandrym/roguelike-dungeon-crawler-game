import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as Store from './modules/Store';
import * as App from './modules/App';
import './modules/Interaction';

ReactDOM.render(
  <Store.components.Provider>
    <App.components.App />
  </Store.components.Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
