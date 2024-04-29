import React from 'react';
import ReactDOM from 'react-dom/client';
import Notifications from './Notifications/Notifications';
import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotifications = ReactDOM.createRoot(
  document.getElementById('root-notifications')
);
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
