import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { uiReducer } from './reducers/uiReducer';
import { thunk } from 'redux-thunk';

export const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
