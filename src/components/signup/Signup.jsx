import React, { useState } from "react";
import './Signup.css';
import logo from './logo512.png';
import axios from 'axios';
import {Backdrop, CircularProgress} from '@mui/material';
import {json, useNavigate} from 'react-router-dom';

export default function Signup(){


    const [loading, setLoading] = useState(false);
    // const [loginStatus, setLoginStatus] = useState("");
    
    const navigate = useNavigate();


    const signupHandler = async (e)=>{
        const name = document.getElementById("signup-username").value;
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const data = {name, email,password};

        setLoading(true);

        try{
            const response = await axios.post(
                "http://localhost:5500/user/register",
                data
            );
            
            localStorage.setItem("userData",JSON.stringify(response));
            
            setTimeout(()=>{
                setLoading(false);
                navigate("/app");
            },2000);


        }catch(error){
            alert("sinup failed " + error);
            setLoading(false);
        }
    };

    return(

        <>

<Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}>
                        <CircularProgress color="inherit" />
                </Backdrop>

        <div className="signup-container">
            
            <div className="signup-box">
                <h1>Signup</h1>
                <input id="signup-username" className="input-box" placeholder="Username" />
                <input id="signup-email" className="input-box" placeholder="Email" />
                <input type="password" id="signup-password" className="input-box" placeholder="Password" />
                <button className="submit-btn" onClick={signupHandler}>Register</button>
                <p>Already have an account? <a href="/">Login</a></p>
            </div>

            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>

        </div>

        </>
    );
}