import React, { useState } from "react";
import axios from 'axios';
import {Backdrop, CircularProgress} from '@mui/material';
import {json, useNavigate} from 'react-router-dom';
import './Login.css';
import logo from './logo512.png';


export default function Login(){

    
     const [loading, setLoading] = useState(false);
    // const [loginStatus, setLoginStatus] = useState("");
    
    const navigate = useNavigate();


    

    const loginHandler = async (e)=>{
        const name = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const data = {name, password};
        //alert(data.name);
        setLoading(true);

        try{
            //alert("inside try");
            const config = {
                headers:{
                    "Content-type":"application/json"
                }
            };

            const response = await axios.post(
                "http://localhost:5500/user/login",
                data
            );
            
            //alert(JSON.stringify(response));
            //setLoginStatus({msg:"Success", key: Math.random()});
            
            localStorage.setItem("userData",JSON.stringify(response));
            

            setTimeout(()=>{
                setLoading(false);
                navigate("/app");

            },2000);

        }catch(error){
            alert("login failed " + error);
            setLoading(false);
            // setLoginStatus({
            //     msg:"Invalid username or password",
            //     key: Math.random()
            // });
        }

        
    };

    return(
        <>
            <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}>
                        <CircularProgress color="inherit" />
                </Backdrop>

        <div className="login-container">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="login-box">
                <h1>Login</h1>
                <input id="login-username" className="input-box" placeholder="Username" />
                <input id="login-password" className="input-box" type="password" placeholder="Password" />
                <button className="submit-btn" onClick={loginHandler}>Submit</button>
                <p>Don't have an account? <a href="/signup">Singup</a></p>
            </div>
            
        </div>
        </>
    );
}