import React, { useState } from 'react';
import Axios from 'axios';

export default function regUser(firstName, surname, dob, email, phone) {

    const name = `${firstName} ${surname}`;

    // CHANGE BACK TO 5000
    Axios.post('http://localhost:3000/register', {
        name,
        dob,
        email,
        phone
    }).then()
      .catch(err => console.error(err));

}

// export default { regUser, renderPWTooltip };