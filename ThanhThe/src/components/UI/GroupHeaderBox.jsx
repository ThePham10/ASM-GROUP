import React from "react";
import "../styles/GroupHeaderBox.css";

const GroupHeaderBox = ({ account }) => {
    return (
        <section className="groupHeaderBox">
            <div>
                <h1 className="groupHeaderBoxTitle">
                    <span className="groupName">
                        {account?.groups[1]?.name}
                    </span>
                </h1>
                <div>
                    <p className="statusMember">
                        <span>
                            {account?.groups[1]?.status} Group 
                            &nbsp;
                            <button className="btn btn-primary"> {account?.groups[1]?.members} Members</button>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GroupHeaderBox;