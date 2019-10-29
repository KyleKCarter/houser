import { createStore } from "redux";

const initialState = {
    name: '',
    address: '',
    city: '',
    nation_state: '',
    zipcode: 0,
    image: '',
    mortgageAmount: 0,
    monthlyRent: 0,
    listing: []
}

export const UPDATE_LISTING = 'UPDATE_LISTING'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
export const UPDATE_RENT = 'UPDATE_RENT'

function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_LISTING:
            console.log(payload);
            return {
                ...state,
                listing: payload
            }
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
                nation_state: payload
            };
        case UPDATE_ZIPCODE:
            return {
                ...state,
                zipcode: payload
            };
        case UPDATE_IMAGE:
            return {
                ...state,
                image: payload
            };
        case UPDATE_MORTGAGE:
            return {
                ...state,
                mortgageAmount: payload
            };
        case UPDATE_RENT:
            return {
                ...state,
                monthlyRent: payload
            };
        // case UPDATE_LISTING:
        //     const { name, address, city, nation_state, zipcode, image, mortgageAmount, monthlyRent } = state;
        //     const house = { name, address, city, nation_state, zipcode, image, mortgageAmount, monthlyRent };
        //     const newHouse = [...state.listing, house]
        //     return {
        //         ...state,
        //         listing: newHouse
        //     };
        default:
            return state;
    }
}

export default createStore(reducer);