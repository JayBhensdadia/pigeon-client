import React from "react";
import './CATextInputArea.css';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from "@mui/material";



export default function CATextInputArea(){
    return(
        <div className="ca-text-input-area">
            <input className="ca-input-box" placeholder="Type a message" />
            <IconButton>
                <SendIcon />
            </IconButton>
        </div>
    );
}