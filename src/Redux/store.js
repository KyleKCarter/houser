import { createStore } from "redux";

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    listing: []
}

export const UPDATE_LISTING = 'UPDATE_LISTING'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'

function reducer(state = initialState, action) {
    const{type, payload} = action;
    switch(type) {
        case UPDATE_LISTING:
            return {
                ...state,
                listing: payload
            };
        case UPDATE_NAME:
            return {
                ...state,
                name: payload
            };
        case UPDATE_ADDRESS:
            return {
                ...state,
                address: payload
            };
        case UPDATE_CITY:
            return {
                ...state,
                city: payload
            };
        case UPDATE_STATE:
            return {
                ...state,
                state: payload
            };
        case UPDATE_ZIPCODE:
            return {
                ...state,
                zipcode: payload
            }
        default: 
            return state;
    }
}

export default createStore(reducer);