import React from "react";
import './ChatArea.css';
import CAHeader from "./ca-header/CAHeader";
import CAMessagesContainer from "./ca-messages-container/CAMessagesContainer";
import CATextInputArea from "./ca-text-input-area/CATextInputArea";

export default function ChatArea({props}){
    return(
        <div className="chat-area">
            <CAHeader props={props.header}/>
            <CAMessagesContainer messages={props.messages} />
            <CATextInputArea />
        </div>
    );
}