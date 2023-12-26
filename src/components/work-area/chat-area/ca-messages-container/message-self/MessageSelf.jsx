import React from "react";
import './MessageSelf.css';

export default function MessageSelf(props){
    return(
        <div className="self-msg">{props.content}</div>
    );
}