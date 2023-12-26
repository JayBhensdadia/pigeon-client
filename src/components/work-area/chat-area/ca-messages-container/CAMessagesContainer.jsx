import React from "react";
import './CAMessagesContainer.css';
import MessageSelf from "./message-self/MessageSelf";
import MessageOther from "./message-other/MessageOther";




export default function CAMessagesContainer(props){
    console.log(props.messages);
    return(
        <div className="ca-messages-container">
            {props.messages.map((msg)=>{
                if(msg.username==="self"){
                    return <MessageSelf content={msg.content} />;
                }else{
                    return <MessageOther content={msg.content} />;
                }
            })}
        </div>
    );
}