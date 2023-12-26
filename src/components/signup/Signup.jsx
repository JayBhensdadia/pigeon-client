import React from "react";
import './Signup.css';
import logo from './logo512.png';

export default function Signup(){
    return(
        <div className="signup-container">
            
            <div className="signup-box">
                <h1>Signup</h1>
                <input className="input-box" placeholder="Username" />
                <input className="input-box" placeholder="Password" />
                <button className="submit-btn">Register</button>
            </div>

            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>

        </div>
    );
}