import React from 'react';
import LoginImg  from './loginimg.png';
import "./Register.css";


export default class Register extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img className="img" src={LoginImg}/>
                </div>
                <div className="form">
                <div className="form-group">
                        <label className="label" htmlFor="password">Username</label>
                        <input className="input" type="text" name="username" placeholder="username"/>
                    </div>
                
                    <div className="form-group">
                        <label className="label" htmlFor="email">Email</label>
                        <input className="input" type="text" name="email" placeholder="email"/>
                    </div>
                        <div className="form-group">
                        <label className="label" htmlFor="password">Password</label>
                        <input className="input" type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
        
       ); 
    }
}