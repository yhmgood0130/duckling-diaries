import { compose, createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

const middleware = [
  logger();
];

const enhancers = compose (
  applyMiddleware(..middleware),
  window.devToolsextension ? window.devToolsextension() : f => f
);

// Create store

const store = createStore (
  rootReducer,
  {},
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

export { store };
