import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import './SBHeader.css';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SBHeader(){

    const navigate = useNavigate();
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
                <IconButton onClick={()=>{navigate('create-group')}}>
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