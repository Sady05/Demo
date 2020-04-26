import React, {Component} from 'react';
//import {BrowserRouter as Router} from 'react-router-dom'
//import React, {useState} from "react";
//import {AppRegistry, StyleSheet, View, Text} from "../node_modules/react-native-elements";
import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";
import "./App.css";
import Card from './CardUI';
import Cards from './Cards';
import Sign_in from './Sign_in';
import Register from './Register';
import { render } from 'react-dom';
import DataPath from './Router'



class App extends Component  {
  constructor(props){
    super(props);
    this.state={
      isLoginActive: true,
    }
  }
   
  render(){
     
    const {isLoginActive} = this.state;
  return (<div>
    
    <h1 className="h1"> MoveUp.com</h1>
    <Router>
    <Route exact path="/" component={Cards} />
    <Link to="/Sign_in"  component={Sign_in} className="login">Login</Link>
    
    
    </Router>
    
       
   
   </div>

   
  );
  }
}

export default App;