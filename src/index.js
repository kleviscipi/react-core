import React from 'react'
import ReactDOM from 'react-dom'
import Root from './app/core/route/index.js';
import createStore from './app/core/store/configureStore.js'
import environmentProd  from './environment/environment.prod.js'
import environmentLocal from './environment/environment.js'
/***INCLUDE BOOTSTRAP***/

import './assets/css/style.css'
import 'bootstrap';

window.environment = process.env=="local"?environmentLocal:environmentProd

const initialState = {}
const store = createStore(initialState)



let render = () => {
	ReactDOM.render(<Root store={store} />,
		document.getElementById('root')
	);
}

render();