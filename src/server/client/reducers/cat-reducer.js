import Immutable from 'immutable';
import { MAKE_MEOW } from '../actions/cat-actions';

const initialState = Immutable.Map({
  hasMeowed: false,
});

const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MEOW:
      return state.set('hasMeowed', action.payload);
    default:
      return state;
  }
};

export default catReducer;
