import React from "react";
import "../styles/GroupHeaderBox.css";
import { modelgroups } from "../model/GroupModel";

const GroupHeaderBox = ({ groupID }) => {
    const group = modelgroups.find((group) => group.id === groupID);

    if (!group) {
        return <div>Group not found</div>;
    }

    return (
        <section className="groupHeaderBox">
            <div>
                <div className="groupPic">
                    <img className="groupPicture" src={group.groupPicture} alt="Group Picture" />
                </div>
                <h1 className="groupHeaderBoxTitle">
                    <span className="groupName">
                        {group.name}
                    </span>
                </h1>
                <div>
                    <p className="statusMember">
                        <span>
                            <a href={`/group${group.id}`} className="text-blue-500 hover:text-blue-700">{group.groupStatus} Group</a> 
                            &nbsp;
                            <a href="GroupMembers" className="text-blue-500 hover:text-blue-700">{group.members} Members</a>
                            &nbsp;
                            <a href={`/aboutus${group.id}`} className="text-blue-500 hover:text-blue-700">About Us</a>
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GroupHeaderBox;