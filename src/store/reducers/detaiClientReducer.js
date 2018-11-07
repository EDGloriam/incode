import { SHOW_CLIENT } from '../../constants/actionTypes';

const defaultValue = 'Select a Client to see more...';
    
const detaiClientReducer = (state = defaultValue, action) => {
  // console.log('-------------------REDUCER--------------');
  // console.log(action);
    switch (action.type){
      case SHOW_CLIENT:
        return {...state.clientInfo, clientInfo: action.payload.thisClient };
      default:
        return state;
    }
    
  };
  
  export default detaiClientReducer;