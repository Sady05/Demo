import React from 'react';
import LoginImg  from './loginimg.png';
import "./Sign_in.css";


export default class Sign_in extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="base-container">
            <div className="header">login</div>
            <div className="content">
                <div className="image">
                    <img className="img" src={LoginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label className="label" htmlFor="email">Username</label>
                        <input className="input" type="text" name="email" placeholder="email"/>
                    </div>
                        <div className="form-group">
                        <label  className="label" htmlFor="password">Password</label>
                        <input className="input" type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Login</button>
            </div>
        </div>
        
       ); 
    }
}
