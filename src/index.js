import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import AppContainer from './containers/app-container';
import './styles/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer player="X" />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
