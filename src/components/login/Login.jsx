import React from "react";
import './Login.css';
import logo from './logo512.png';


export default function Login(){
    return(
        <div className="login-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="login-box">
                <h1>Login</h1>
                <input className="input-box" placeholder="Username" />
                <input className="input-box" placeholder="Password" />
                <button className="submit-btn">Submit</button>
            </div>
        </div>
    );
}