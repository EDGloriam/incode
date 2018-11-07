//  [2] 
import clientsData from '../../data/clients.json';

const clientsReducer = (state = clientsData, { type, payload }) => {
    switch (type){
      // reserved spase for a new actions
      default:
        return state;
    }
    
  };
  
  export default clientsReducer;