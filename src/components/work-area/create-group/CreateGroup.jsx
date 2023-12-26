import React from "react";
import './CreateGroup.css';
import { IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function CreateGroup(){
    return(
        <div className="create-group-container">
            <input placeholder="Enter group name" className="input-box" />
            <IconButton>
                <CheckCircleIcon />
            </IconButton>
        </div>
    );
}