import React, { useState } from "react";
import axios from 'axios';
import {Backdrop, CircularProgress} from '@mui/material';
import {json, useNavigate} from 'react-router-dom';
import './Login.css';
import logo from './logo512.png';


export default function Login(){

//     const [name, setName] = useState("");
//     const [password, setPassword] = useState("");

//    // const [data, setData] = useState({name:"", password:""});
//     const [loading, setLoading] = useState(false);
//     const [loginStatus, setLoginStatus] = useState("");
    
    const navigate = useNavigate();


    // const nameChangeHandler = (e)=>{
    //     // setData({...data , [e.target.name] : e.target.value});
    //     setName(e.target.value);
    // };

    // const passwordChangeHandler = (e)=>{
    //     // setData({...data , [e.target.name] : e.target.value});
    //     setPassword(e.target.value);
    // };

    const loginHandler = async (e)=>{
        const name = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        const data = {name, password};
        alert(data);
        //setLoading(true);

        try{
            alert("inside try");
            const config = {
                headers:{
                    "Content-type":"application/json"
                }
            };

            const response = await axios.post(
                "http://localhost:5500/user/login",
                data
            );
            
            alert("login: ",response);
            //setLoginStatus({msg:"Success", key: Math.random()});
            //setLoading(false);
            //localStorage.setItem("userData",JSON.stringify(response));
            navigate("/app");

        }catch(error){
            alert("login failed " + error);
            // setLoginStatus({
            //     msg:"Invalid username or password",
            //     key: Math.random()
            // });
        }

        //setLoading(false);
    };

    return(
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
    );
}