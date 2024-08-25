import React from 'react';
import { modelgroups } from '../model/GroupModel';
import '../styles/MembersBox.css';

const MembersBox = ({ groupID }) => {
    const group = modelgroups.find((group) => group.id === groupID);

    if (!group) {
        return <div>Group not found</div>;
    }

    return (
        <div className="AboutUsBox">
            <div className="membersBox">
                <h1>Members:</h1>
                <div className="scrollableBox">
                    {group.members.map((member, index) => (
                        <div key={index} className="memberContainer">
                            <p>{member}</p>
                            <button className="removeButton">Remove</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MembersBox;