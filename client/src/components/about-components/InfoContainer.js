import React from 'react';

export default function InfoContainer(left_props) {
    // console.log(left_props);
    return (
        <div className="about-card--info-container">
            <h4 className="about-card--person-name">{left_props.props.name}</h4>
            <ul className="about-card--contact-info">
                <li>email: {left_props.props.email}</li>
                <li>twitter: {left_props.props.twitter}</li>
                <li><a href={left_props.props.orgURL}>{left_props.props.orgURL}</a></li>
            </ul>
        </div>
    );
}