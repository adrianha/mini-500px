import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const enhancer = applyMiddleware(thunk);

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);

  return store;
}
