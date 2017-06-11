import React from 'react';
import firebase from 'firebase';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';
import App from './containers/app';
import comicsSaga from './sagas/comics';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(comicsSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
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
