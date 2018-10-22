import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { combineReducers, createStore  } from 'redux';
import { Provider } from 'react-redux';

import clientReducer from './reducers/clientReducer';

const allReducer = combineReducers({
  clients: clientReducer
});

const store = createStore(allReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
