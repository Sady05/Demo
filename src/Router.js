import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Sign_in from './Sign_in';

export default class Datapath  {
    render(){
    return(
        <div>
        <Router>
        <Route path='/Sign_in' component={Router}></Route>
        </Router>
        </div>
    )
    }
}