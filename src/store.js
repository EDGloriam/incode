import { createStore } from 'redux';
import mainReducer from './reducers/index';

export default createStore(mainReducer);