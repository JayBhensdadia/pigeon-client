import React from "react";
import './ConversationItem.css'

export default function ConversationItem({props}){
    return(
        <div className="conversation-item">
            <p className="con-icon">{props.name[0]}</p>
            <p className="con-title">{props.name}</p>
            <p className="con-lastMessage">{props.lastMessage}</p>
            <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
    );
}