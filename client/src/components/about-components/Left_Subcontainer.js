import React from 'react';
import InfoContainer from './InfoContainer';

export default function Left_Subcontainer(pc_props) {
    // console.log(pc_props)
    return (
        <div>
            <div className="image-placeholder"></div>
            <InfoContainer 
                {...pc_props}
            />
        </div>
    );
}

// <img className="about-card--picture" src="../placeholder.jpg"/>