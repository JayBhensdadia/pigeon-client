import React from "react";
import './WorkArea.css';
import ChatArea from "./chat-area/ChatArea";
import Welcome from "./welcome/Welcome";
import CreateGroup from "./create-group/CreateGroup";

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
                content: "how are you?",
                timeStamp:"10:00 AM"
            },
            {
                username:"other",
                content: "i am fine",
                timeStamp:"10:05 AM"
            },
            {
                username:"other",
                content: "how about you?",
                timeStamp:"10:10 AM"
            },
            {
                username:"self",
                content: "great!!",
                timeStamp:"10:15 AM"
            },
            {
                username:"self",
                content: "how's work??? tell me about your work and lets talk in very very detail so that i can check wether my msg box is able to wrap its content in multiple line or it just grows in single line",
                timeStamp:"10:20 AM"
            },
            {
                username:"self",
                content: "great!!",
                timeStamp:"10:15 AM"
            }

        ]
    };

    return(
        <div className="work-area">
            {/* <Welcome /> */}
            {/* <CreateGroup /> */}
            <ChatArea  props={conversation} />
        </div>
    );
}