import React from 'react';
import { Tooltip } from 'react-bootstrap';

export default function renderPWTooltip (props) { 
    return (
        <Tooltip id="reg-form--password-tooltip" {...props}>
            Password must be at least 10 characters in length,
            must contain 1 Capital letter, 1 number, and 1 unique symbol.
        </Tooltip>
    );
}