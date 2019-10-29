import React from "react";
import {Switch, Route} from "react-router-dom";

//components
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import Image from "./components/Step 2/Image";
import Mortgage from "./components/Step 3/Mortgage";

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={Wizard} path='/wizard' />
        <Route component={Image} path='/step2' />
        <Route component={Mortgage} path='/step3' />
        {/* <Route component={} path='/statelist/:state' /> */}
    </Switch>
)