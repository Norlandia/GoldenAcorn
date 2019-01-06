import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AcornRouter from './components/AcornRouter';

ReactDOM.render(
  <Provider store={store}>
    <AcornRouter />
  </Provider>,
  document.getElementById('root')
);
