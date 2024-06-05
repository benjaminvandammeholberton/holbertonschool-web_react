import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
