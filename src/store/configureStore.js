//[1] в конфиге мы собераем все редюсеры и передаем их в createStore. создаеться хранилище

import { combineReducers, createStore  } from 'redux';
import clientsReducer from './reducers/clientsReducer';
import detaiClientReducer from './reducers/detaiClientReducer';

const rootReducer = combineReducers({
    clients: clientsReducer,
    clientInfo: detaiClientReducer
  });

const store = createStore(rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


