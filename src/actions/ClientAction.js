import { UPDATE_CLIENT } from '../constants/actionTypes';

export const updateClients = (newClient) => {
    return {
        type: UPDATE_CLIENT,
        payload: {
            "general": {
              "firstName": "aaaaaa",
              "lastName": "aaaaaaa",
              "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
            },
            "job": {
              "company": "a",
              "title": "a"
            },
            "contact": {
              "email": "a",
              "phone": "111111"
            },
            "address": {
              "street": "1520 Zemlak Cove",
              "city": "New Devon",
              "zipCode": "42586-7898",
              "country": "Guinea-Bissau"
            }
          }

    }
}