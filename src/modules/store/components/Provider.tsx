import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { entity } from '../model';

const Provider: React.StatelessComponent = (props) => (
  <ReactRedux.Provider store={entity}>
    {props.children}
  </ReactRedux.Provider >
);

export default Provider;
