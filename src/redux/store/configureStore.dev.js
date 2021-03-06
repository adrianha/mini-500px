import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

let enhancer;
window.devToolsExtension ?
  enhancer = compose (
    applyMiddleware(thunk),
    window.devToolsExtension(),
  ) :
  enhancer = applyMiddleware(thunk)

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
