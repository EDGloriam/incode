import { UPDATE_CLIENT } from '../constants/actionTypes';
import clientsData from '../data/clients.json';

const clientReducer = (state = clientsData, { type, payload }) => {
    switch (type){
      case UPDATE_CLIENT:
        return payload.clients;
      default:
        return state;
    }
    
  };
  
  export default clientReducer;