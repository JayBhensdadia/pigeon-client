import React from "react";
import './UserItem.css';


export default function UserItem(props){
    return(
        <div className="user-item">
            <div className="user-logo">{props.name[0]}</div>
            <div className="user-name">{props.name}</div>
        </div>
    );
}