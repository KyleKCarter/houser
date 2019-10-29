import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import store, {UPDATE_LISTING} from "../../Redux/store";

//components
// import FilteredHouses from "./FilteredHouses";

export default class Search extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state ={
            houses: [],
            listing: reduxState.listing
        }
    }

    // componentDidMount = () => {
    //     axios.get(`api/houses?state=${this.props.match.params.states}`)
    //         .then(response => {
    //             this.setState({ houses: response.data });
    //         })
    // }

    // render() {
    //     const houses = this.state.houses.slice((val, i) => {
    //         return(
    //             <FilteredHouses key={i} house={val} listing={this.state.listing} />
    //         )
    //     })
    //     return(
    //         <div>
    //             <Link to='/'>
    //                 <button>Home</button>
    //             </Link>
    //             <h3>{this.props.match.params.state}</h3>
    //             <h5>State Listings:</h5>
    //             {houses}
    //         </div>
    //     )
    // }
}