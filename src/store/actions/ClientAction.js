import { SHOW_CLIENT } from '../../constants/actionTypes';

export const showClient = (thisClient) => {
    // console.log('-------- Action ----------');
    // console.log(thisClient);
    return {
        type: SHOW_CLIENT,
        payload: { thisClient }
    }
}