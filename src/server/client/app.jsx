import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';
import dogReducer from './reducers/dog-reducer';
import catReducer from './reducers/cat-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';
import MeowMessage from './containers/meow-message';
import MeowButton from './containers/meow-button';

const store = createStore(combineReducers({
  dog: dogReducer,
  cat: catReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton />
      <MeowMessage />
      <MeowButton />
    </div>
  </Provider>
  , document.querySelector('.app')
);
