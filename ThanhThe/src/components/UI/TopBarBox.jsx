import React from "react";
import "../styles/TopBarBox.css";

const TopBarBox = ({ account }) => {
    return (
        <div className="topBar">
            <button className="Profile">{account?.firstName}</button>
                        
            <button className="Notification">Notification</button>
        </div>
    );
};

export default TopBarBox;
