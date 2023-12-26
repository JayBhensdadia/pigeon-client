import React from "react";
import './WorkArea.css';
import ChatArea from "./chat-area/ChatArea";

export default function WorkArea(){

    const conversation = {
        header: {
            name:"test 1",
            lastMessage:"last message 1",
            timeStamp:"today"
        },

        messages : [
            {
                username:"self",
                content: "how are you?"
            },
            {
                username:"other",
                content: "i am fine"
            }
        ]
    };

    return(
        <div className="work-area">
            <ChatArea 
                props={conversation}
            />
        </div>
    );
}