import React from 'react';
import SSC2 from './SSC2.jpg';
import "./Card-style.css";
import Login from "./Login.js";
import {Container} from 'react-bootstrap';



const Card = props =>{
    return(
        <Container>
         <div className="card text-centre shadow">
             <h2 className="mock">Mock Test</h2>
             <div className="overflow">
                 <img src={props.imgsrc} alt="" className="card-img-top"/>
             </div>
             <div className="card-body text-dark">
                 <h4 className="card-title">{props.title}</h4>
                 <p className="card-text text-secondary">Type : {props.type} <p className="p2">Duration : {props.duration}
    <p>Question: {props.noq} </p>{props.isLoginRequired &&<p>Practice Point: <a href="./Login">Login</a></p>}</p>
                 </p>
                               
                 <a href="#" className="btn btn-outline-success ">Start Test</a>
             </div>
         </div>
         </Container>

    );
}
export default Card;