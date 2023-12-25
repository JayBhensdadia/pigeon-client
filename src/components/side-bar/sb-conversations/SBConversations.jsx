import React, { useState } from "react";
import './SBConversations.css'
import ConversationItem from "./conversation-item/ConversationItem";

export default function SBConversations(){

    const [conversations, setConversations] = useState([
        {
            name: "Test 1",
            lastMessage: "Last Message 1",
            timeStamp: "today"
        },
        {
            name: "Test 2",
            lastMessage: "Last Message 2",
            timeStamp: "today"
        },
        {
            name: "Test 3",
            lastMessage: "Last Message 3",
            timeStamp: "today"
        }
    ]);

    return(
        <div className="sb-conversations">
            {
                conversations.map((conversation)=>{
                    return(
                        <ConversationItem 
                            key={conversation.name}
                            props={conversation}
                        />
                    );
                })
            }
        </div>
    );
}