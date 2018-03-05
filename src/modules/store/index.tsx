import * as Redux from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import { State } from './model';
import reducer from './reducer';
import initials from '../initials';

const store = Redux.createStore<State>(
  reducer,
  initials,
  devToolsEnhancer({}));

export * from './model';
export * from './selectors';
export const dispatch = store.dispatch;

export default store;
