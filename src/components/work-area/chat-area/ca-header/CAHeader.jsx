import React from "react";
import './CAHeader.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";

export default function CAHeader({props}){
    return(
        <div className="ca-header">
            <p className="con-icon">{props.name[0]}</p>
            <div className="header-text">
                <p className="con-title">{props.name}</p>
                <p className="con-timeStamp">{props.timeStamp}</p>
            </div>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </div>
    );
}