import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'normalize.css';
import './assets/styles/main.scss';
import state from './store/reducers';
import * as TYPE from './store/actions';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(state);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
store.dispatch(TYPE.setVideoList());

// store.dispatch(TYPE.setSearchKey(''));
console.log('store--', store.getState());
// store.dispatch(TYPE.getSearchVideoList());
serviceWorker.unregister();
