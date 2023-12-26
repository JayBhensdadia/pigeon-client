import React from "react";
import './Online.css'
import UserItem from "./user-item/UserItem";


export default function Online(){
    const onlineUsers = [
        {
            name:"user-1"
        },
        {
            name:"user-1"
        },
        {
            name:"user-1"
        },
        {
            name:"user-1"
        },
        {
            name:"user-1"
        }
        ,
        {
            name:"user-1"
        },
        {
            name:"user-1"
        },
        {
            name:"user-1"
        },
        {
            name:"user-1"
        }
        ,
        {
            name:"user-1"
        },
        {
            name:"user-1"
        },
        {
            name:"user-1"
        },
        {
            name:"user-1"
        }
    ]
    return(
        <div className="online-container">
            <p>Online</p>
            <div className="online-list">
                { onlineUsers.map((user)=>{
                    return(<UserItem name={user.name} />);
                })}
            </div>
        </div>
    );
}