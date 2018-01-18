import { State } from './model';
import * as actions from './actions';

export default (state: State, action: actions.Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};
