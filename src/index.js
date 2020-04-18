// Needed for redux-saga es6 generator support
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import { logoutRequest } from 'global/authentication/reducer';
import setupAxiosInterceptors from 'utils/axiosInterceptors';
import 'sanitize.css/sanitize.css';

// Import root App
import App from './App';

// Import Language Provider
import LanguageProvider from 'global/LanguageProvider';

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Create redux sotre with history
const initialState = {};
const store = configureStore(initialState, history);

// Configure Axios Interceptors
const actions = bindActionCreators({ logoutRequest }, store.dispatch);
setupAxiosInterceptors(() => actions.logoutRequest());

const MOUNT_MODE = document.getElementById('root');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_MODE,
  );
};

if (module.hot){
  /**
   *  Hot reloadable React components and translation json files
   *  modules.hot.accept does not accept dynamic dependencies,
   * have to be constants at compile time.
   */
  module.hot.accept(['./i18n', './App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_MODE);
    render(translationMessages);
  })
}

// Chunked polyfill for browsers without Intl support 
if (!window.Intl){
  new Promise(resolve => {
    resolve(import('intl'));
  })
  .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
  .then(() => render(translationMessages))
  .catch(err => {
    throw err;
  });
} else {
  render(translationMessages);
}

/**
 *  Install ServiceWorker and AppCache in the end since
 *  it's not most important operation and if main code fails,
 *  we do not want it installed
 */
 if (process.env.NODE_ENV === 'production'){
   require('offline-plugin/runtime').install(); // eslint-disable-line global-require
 }