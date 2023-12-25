import React from "react";
import './SBSearch.css';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "@mui/material";

export default function SBSearch(){
    return(
        <div className="sb-search">
            <IconButton>
                <SearchIcon />
            </IconButton>
            <input className="search-box" placeholder="Search" />
        </div>
    );
}