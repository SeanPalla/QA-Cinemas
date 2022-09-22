import React from 'react';

export default function Right_Subcontainer(bio) {
    // console.log(bio);
    return (
        <div className="about-card--bio">
            <p className="about-card--bio--text">{bio.props}</p>
        </div>
    );
}