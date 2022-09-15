import React from 'react';
import Left from './Left_Subcontainer'
import Right from './Right_Subcontainer'

export default function ProfileContainer(appjs_props) {
    // console.log(appjs_props);
    return (
        <div className="about-card">
            <Left props = {appjs_props}/>
            <Right props = {appjs_props.bio}/>
        </div>
    );
}