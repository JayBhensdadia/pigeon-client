import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import './SBHeader.css';
import { IconButton } from "@mui/material";

export default function SBHeader(){
    return(
        <div className="sb-header">
            <div>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </div>
            
            <div>
                <IconButton>
                    <PersonAddIcon />
                </IconButton>
                <IconButton>
                    <GroupAddIcon />
                </IconButton>
                <IconButton>
                    <AddCircleIcon />
                </IconButton>
                <IconButton>
                    <NightlightIcon />
                </IconButton>
            </div>

        </div>
    );
}