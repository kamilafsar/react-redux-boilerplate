import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistory, routeReducer} from 'redux-simple-router'

import voteReducer from './reducers/voteReducer';
import App from './App';

const DevTools = createDevTools(<LogMonitor />);

const rootReducer = combineReducers({
  votes: voteReducer,
  routing: routeReducer,
});

const reduxRouterMiddleware = syncHistory(browserHistory);

const finalCreateStore = compose(
  applyMiddleware(thunk, reduxRouterMiddleware),
  DevTools.instrument()
)(createStore);

const store = finalCreateStore(rootReducer);

// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store)

const routes = <Provider store={store}>
  <div>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={App} />
      </Route>
    </Router>
    <DevTools/>
  </div>
</Provider>;

ReactDOM.render(
  routes,
  document.getElementById('app')
);
