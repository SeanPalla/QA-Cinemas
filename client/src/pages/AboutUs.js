import React from 'react';
import ProfileContainer from '../components/about-components/ProfileContainer';
import data from '../components/about-components/about-data';
import '../components/about-components/about-styling.css';

export default function AboutUs() {
    const cards = data.map(item => {
        return (
            <ProfileContainer
                key={item.id}
                {... item}
            />
        )
    }) 
    return (
        <div className="about--main-container">
            {cards}
        </div>
    );
}