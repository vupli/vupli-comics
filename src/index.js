import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`);
  });
}
