import React from 'react';
import InfoContainer from './InfoContainer';

export default function Left_Subcontainer(pc_props) {
    // console.log(pc_props)
    return (
        <div className="about-card--left-subcontainer">
            <div className="about-card--image-placeholder"></div>
            <InfoContainer 
                {...pc_props}
            />
        </div>
    );
}

// <img className="about-card--picture" src="../placeholder.jpg"/>