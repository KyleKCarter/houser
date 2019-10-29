import React from "react";
import "./Header.css";
import {HashRouter, Link} from "react-router-dom";

//components
import routes from "../../routes";

export default function Header() {
        return(
            <HashRouter>
                <div className='header'>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/wizard'>Wizard</Link>
                    {routes}
                </div>
            </HashRouter>
        )
}