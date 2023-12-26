import React from "react";
import './MainContainer.css'
import SideBar from "../side-bar/SideBar";
import WorkArea from "../work-area/WorkArea";
import Online from "../online-users-groups/Online";


export default function MainContainer(){
    return(
        <div className="main-container">
            <SideBar />
            <WorkArea />
            <Online />
        </div>
    );
}
