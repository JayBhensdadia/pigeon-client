import React from "react";
import './MessageSelf.css';

export default function MessageSelf(props){
    return(
        <div className="self-msg-box">
            <div className="self-msg">
                {props.content}
                <div className="self-timeStamp">
                    {props.timeStamp}
                </div>
            </div>
            
        </div>
    );
}