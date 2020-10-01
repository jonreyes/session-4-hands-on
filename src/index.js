import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './counterReducer';
import Counter from './Counter';

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
  <Counter/>
  </Provider>, 
  document.getElementById('root')
);