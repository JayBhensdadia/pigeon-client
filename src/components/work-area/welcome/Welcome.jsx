import React from "react";
import './Welcome.css';
import logo from './logo512.png';


export default function Welcome(){
    return(
        <div className="welcome-container">
            <img src={logo} alt="logo" className="welcome-logo" />
            <p>view and text directly to people present in the chat rooms</p>
        </div>
    );
}