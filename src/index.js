import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import GoldenAcornApp from './containers/GoldenAcornApp';

ReactDOM.render(
  <Provider store={store}>
    <GoldenAcornApp />
  </Provider>,
  document.getElementById('root')
);
