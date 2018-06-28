import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
const title = 'Reminder App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
registerServiceWorker();