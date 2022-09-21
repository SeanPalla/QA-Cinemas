import React from 'react';
import ProfileContainer from '../components/about-components/ProfileContainer';
import data from '../components/about-components/about-data';

export default function AboutUs() {
    const cards = data.map(item => {
        return (
            <ProfileContainer
                key={item.id}
                {... item}
            />
        )
    }) 
    console.log(cards)
    return (
        <div>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    );
}