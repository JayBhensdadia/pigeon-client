import React from "react";
import './MainContainer.css'
import SideBar from "../side-bar/SideBar";
import WorkArea from "../work-area/WorkArea";
 

export default function MainContainer(){
    return(
        <div className="main-container">
            <SideBar />
            <WorkArea />
        </div>
    );
}
