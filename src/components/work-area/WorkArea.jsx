import React from "react";
import './WorkArea.css';
import ChatArea from "./chat-area/ChatArea";

export default function WorkArea(){
    return(
        <div className="work-area">
            <ChatArea 
                props={{
                    header:{
                        name: "Test 1",
                        lastMessage: "Last Message 1",
                        timeStamp: "today"
                    },
                    messages:[]
                }}
            />
        </div>
    );
}