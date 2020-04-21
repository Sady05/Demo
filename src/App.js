import React, {Component} from 'react';
//import React, {useState} from "react";
//import {AppRegistry, StyleSheet, View, Text} from "../node_modules/react-native-elements";
import {
  BrowserRouter as Router, Route, Link
} from "react-router-dom";
import "./App.css";
import Card from './CardUI';
import Cards from './Cards';
import Sign_in from './Sign_in.jsx';
import Register from './Register';

class App extends Component  {
  constructor(props){
    super(props);
    this.state={
      isLoginActive: true,
    }
  }
   
  render(){
    const {isLoginActive} = this.state;
  return (
   <div className="App">
     <div className="Sign_in">
       <div className="container">
       <div>
         {isLoginActive && <Sign_in containerRef={(ref)=> this.current= ref}/>}
         {!isLoginActive && <Register containerRef={(ref)=> this.current= ref}/>}
     <h1 className="h1"> MoveUp.com  <h5><a href={Sign_in} className="login">Login</a></h5></h1>
     <Cards />
       
    </div>
       </div>
     </div>
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