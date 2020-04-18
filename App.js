import React, {Component} from 'react';
//import React, {useState} from "react";
//import {AppRegistry, StyleSheet, View, Text} from "../node_modules/react-native-elements";
import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";
import "./App.css";
import Card from './CardUI';
import Cards from './Cards';

class App extends Component  {
   
  render(){
  return (
    <div>
     <h1 className="h1"> MoveUp.com  <h5><a href="/" className="login">Login</a></h5></h1>
     <Cards />

        
        
       
    </div>

   
  );
  }
}
/*const style = StyleSheet.create({
  MainContainer :{
    justifyContent: 'center',
    flex:1,
    margin:10
  },
  TextStyle:{
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline'
  }
})*/
export default App;