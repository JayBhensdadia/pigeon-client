import React from "react";
import './ConversationItem.css'
import { useNavigate } from "react-router-dom";

export default function ConversationItem({props}){
    const navigate = useNavigate();

    return(
        <div className="conversation-item" onClick={()=>{navigate('chat')}} >
            <p className="con-icon">{props.name[0]}</p>
            <p className="con-title">{props.name}</p>
            <p className="con-lastMessage">{props.lastMessage}</p>
            <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
    );
}