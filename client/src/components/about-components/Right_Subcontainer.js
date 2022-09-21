import React from 'react';

export default function Right_Subcontainer(bio) {
    // console.log(bio);
    return (
        <div className="about-card--bio">
            <p>{bio.props}</p>
        </div>
    );
}