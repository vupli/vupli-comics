import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';

import App from './containers/app';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${process.env.PUBLIC_URL}/service-worker.js`);
  });
}

firebase.initializeApp({
  apiKey: 'AIzaSyDMTwj6sDEgD1iONRguVF8A26phw-69hkw',
  authDomain: 'https://vupli-comics.firebaseapp.com',
  databaseURL: 'https://vupli-comics.firebaseio.com',
  storageBucket: 'gs://vupli-comics.appspot.com'
});
