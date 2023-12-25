import React from "react";
import './SideBar.css';
import SBHeader from "./sb-header/SBHeader";
import SBSearch from "./sb-search/SBSearch";
import SBConversations from "./sb-conversations/SBConversations";


export default function SideBar(){
    return(
        <div className="side-bar">
            <SBHeader />
            <SBSearch />
            <SBConversations />
        </div>
    );
}