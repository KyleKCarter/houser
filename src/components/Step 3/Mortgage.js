import React, {Component} from "react";
import store, {UPDATE_MORTGAGE, UPDATE_RENT, UPDATE_LISTING} from "../../Redux/store";
import {Link} from "react-router-dom";
import axios from 'axios';

export default class Mortgage extends Component {
    constructor() {
        super();
        const reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.nation_state,
            zipcode: reduxState.zipcode,
            image: reduxState.image,
            mortgageAmount: reduxState.mortgageAmount,
            monthlyRent: reduxState.monthlyRent,
            listing: reduxState.listing
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addMortgage = () => {
        const {mortgageAmount, monthlyRent} = this.state;
        store.dispatch({
            type: UPDATE_MORTGAGE,
            payload: mortgageAmount
        });
        store.dispatch({
            type: UPDATE_RENT,
            payload: monthlyRent
        });
    }

    addListing = () => {
        const { name, address, city, state, zipcode, image, mortgageAmount, monthlyRent } = this.state;
        axios.post('/api/houses', {
            name,
            address,
            city,
            state,
            zipcode,
            image,
            mortgageAmount,
            monthlyRent
        }).then(response => {
            store.dispatch({
                type: UPDATE_LISTING,
                payload: response.data.listing
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        console.log(this.state.listing)
        const {mortgageAmount, monthlyRent} = this.state;
        return(
            <div>
                <Link to='/wizard'>
                    <button>Cancel</button>
                </Link>
                <h4>Recommended Rent: $0</h4>
                <input onChange={this.handleChange} value={mortgageAmount} name='mortgageAmount'/>
                <input onChange={this.handleChange} value={monthlyRent} name='monthlyRent' />
                <Link to='/step2'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard'>
                    <button onClick={this.addListing}>Complete</button>
                </Link>
            </div>
        )
    }
}