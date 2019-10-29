import React, { Component } from "react"
import axios from "axios";
import store, {UPDATE_LISTING} from "../../Redux/store";

//components
import House from "../House/House";

export default class Dashboard extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state = {
            listing: reduxState.listing
        }
    }

    componentDidMount() {
        this.getListing();
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({ listing: reduxState.listing })
        })
    }

    getListing = () => {
        axios.get('/api/houses')
            .then(response => {
                store.dispatch({
                    type: UPDATE_LISTING,
                    payload: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    removeHouse = (id) => {
        axios.delete(`/api/houses/${id}`)
            .then(response => {
                store.dispatch({
                    type: UPDATE_LISTING,
                    payload: response.data
                });
            }).catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.state.listing)
        const {listing} = this.state;
        let mappedListing = listing.map((val, i) => {
            return (
                <House listing={listing} house={val} key={i} removeHouse={this.removeHouse} />
            )
        })
        return (
            <div>
                <div>Home Listings</div>
                {mappedListing}
            </div>
        )
    }
}