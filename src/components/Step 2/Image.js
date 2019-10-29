import React, {Component} from "react";
import store, {UPDATE_IMAGE} from "../../Redux/store";
import {Link} from "react-router-dom";
import "./Image.css";

export default class Image extends Component {
    constructor() {
        super();
        const reduxState = store.getState()
        this.state = {
            image: reduxState.image,
        }
        this.addImage = this.addImage.bind(this);
    }

    handleChange = e => {
        this.setState({ image: e.target.value });
    }

    addImage() {
        const {image} = this.state
            store.dispatch({
                type: UPDATE_IMAGE,
                payload: image
            })
    }

    render() {
        return (
            <div className='image-page'>
                <Link to='/wizard'>
                    <button>Cancel</button>
                </Link>
                <h4>Image URL</h4>
                <input onChange={e => this.handleChange(e)}/>
                <Link to='/wizard'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/step3'>
                    <button onClick={() => this.addImage()}>Next Step</button>
                </Link>
            </div>

        )
    }
}