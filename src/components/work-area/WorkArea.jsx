import React from "react";
import './WorkArea.css';
import ChatArea from "./chat-area/ChatArea";
import Welcome from "./welcome/Welcome";
import CreateGroup from "./create-group/CreateGroup";
import { Outlet, Route, Routes } from "react-router-dom";

export default function WorkArea(){

    

    return(
        <div className="work-area">

            <Outlet />
            {/* <Welcome /> */}
            {/* <CreateGroup /> */}
            {/* <ChatArea  props={conversation} />  */}
        </div>
    );
}