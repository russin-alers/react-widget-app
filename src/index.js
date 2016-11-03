import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducer/reducer'

import App from './components/app';

var store = createStore(mainReducer);

ReactDOM.render(
                <Provider store={store}>
              		<App />
              	</Provider>,
                document.querySelector('.app')
);
