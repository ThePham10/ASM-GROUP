import React from 'react';
import { modelgroups } from '../model/GroupModel';
import '../styles/AboutUsBox.css';

const AboutUsBox = ({ groupID }) => {
    const group = modelgroups.find((group) => group.id === groupID);

    if (!group) {
        return <div>Group not found</div>;
    }

    return (
        <div className="AboutUsBox">
            <h1 className='titleAboutUs'>
                <p> About Us</p>
            </h1>
            <div className="groupDescription">
                <p>{group.intro}</p>
            </div>
        </div>
    );
};

export default AboutUsBox;