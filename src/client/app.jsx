import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import dogReducer from './reducers/dog-reducer';
import BarkMessage from './containers/bark-message';
import BarkButton from './containers/bark-button';
import catReducer from './reducers/cat-reducer';
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
