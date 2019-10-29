import React, { Component } from "react"
import "./House.css";
import store, { } from "../../Redux/store";

export default class House extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state = {
            listing: reduxState.listing
        }
    }
    render() {
        const { name, address, city, state, zipcode, image, mortgageAmount, monthlyRent  } = this.props.house;
        return (
            <div>
                <p className='delete' onClick={() => this.props.removeHouse(this.props.house.id)}>X</p>
                <div>House</div>
                <img src={image} alt="house_image"/>
                <h5>Property Name: {name}</h5>
                <h5>Address: {address}</h5>
                <h5>City: {city}</h5>
                <h5>State: {state}</h5>
                <h5>Zip: {zipcode}</h5>
                <h5>Monthly Mortgage: ${mortgageAmount}</h5>
                <h5>Desired Rent: ${monthlyRent}</h5>
            </div>
        )
    }
}