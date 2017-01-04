import React from 'react';
import ReactDOM from 'react-dom';

import { selectAllPokemon } from './reducers/selectors';
// import * as APIUtil from './util/api_util';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';

import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // window.store = store;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});
