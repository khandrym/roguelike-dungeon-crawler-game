import * as React from 'react';
import * as ReactRedux from 'react-redux';
import store from '../model';

const Provider: React.StatelessComponent = (props) => (
  <ReactRedux.Provider store={store}>
    {props.children}
  </ReactRedux.Provider >
);

export default Provider;
