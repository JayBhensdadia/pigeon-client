import React from "react";
import './MessageOther.css';

export default function MessageOther(props){
    return(
        <div className="other-msg">{props.content}</div>
    );
}