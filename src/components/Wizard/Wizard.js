import React, { Component } from "react"
import "./Wizard.css";
// import axios from "axios";
import store, { UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIPCODE } from "../../Redux/store";
import {Link} from "react-router-dom";

export default class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addInfo = () => {
        const {name, address, city, state, zipcode} = this.state;
        store.dispatch({
            type: UPDATE_NAME,
            payload: name
        })
        store.dispatch({
            type: UPDATE_ADDRESS,
            payload: address
        })
        store.dispatch({
            type: UPDATE_CITY,
            payload: city
        })
        store.dispatch({
            type: UPDATE_STATE,
            payload: state
        })
        store.dispatch({
            type: UPDATE_ZIPCODE,
            payload: zipcode
        })
    }

    // addListing = () => {
    //     const { name, address, city, state, zipcode } = this.state;
    //     axios.post('/api/houses', {
    //         name,
    //         address,
    //         city,
    //         state,
    //         zipcode
    //     }).then(response => {
    //         store.dispatch({
    //             type: UPDATE_NAME,
    //             payload: response.data.name
    //         })
    //         store.dispatch({
    //             type: UPDATE_ADDRESS,
    //             payload: response.data.address
    //         })
    //         store.dispatch({
    //             type: UPDATE_CITY,
    //             payload: response.data.city
    //         })
    //         store.dispatch({
    //             type: UPDATE_STATE,
    //             payload: response.data.state
    //         })
    //         store.dispatch({
    //             type: UPDATE_ZIPCODE,
    //             payload: response.data.zipcode
    //         })
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // }

    handleClearFields = () => {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        })
    }

    render() {
        const { name, address, city, state, zipcode } = this.state;
        return (
            <div className='body'>
                <div className='top'>
                    <div>Add New Listing</div>
                    <button onClick={this.handleClearFields}>Cancel</button>
                </div>
                {/* <form>
                    <h5>Property Name</h5>
                    <input className='name' onChange={this.handleChange} value={name} name='name' />
                    <h5>Address</h5>
                    <input className='name' onChange={this.handleChange} value={address} name='address' />
                    <h5>City</h5>
                    <input className='name' onChange={this.handleChange} value={city} name='city' />
                    <h5>State</h5>
                    <input className='name' onChange={this.handleChange} value={state} name='state' />
                    <h5>Zip</h5>
                    <input className='name' onChange={this.handleChange} value={zipcode} name='zipcode' />
                </form> */}
                <form>
                    <form className='PA'>
                        <h5>Property Name</h5>
                        <input className='name' onChange={this.handleChange} value={name} name='name' />
                        <h5>Address</h5>
                        <input className='address' onChange={this.handleChange} value={address} name='address' />
                    </form>
                    <div className='CSZ'>
                        <form className='C'>
                            <h5>City</h5>
                            <input className='city' onChange={this.handleChange} value={city} name='city' />
                        </form>
                        <form className='S'>
                            <h5>State</h5>
                            <input className='state' onChange={this.handleChange} value={state} name='state' />
                        </form>
                        <form className='Z'>
                            <h5>Zip</h5>
                            <input className='zipcode' onChange={this.handleChange} value={zipcode} name='zipcode' />
                        </form>
                    </div>
                </form>
                <Link to='/step2'>
                    <button className='addButton' onClick={this.addInfo}>Next Step</button>
                </Link>
            </div>
        )
    }
}