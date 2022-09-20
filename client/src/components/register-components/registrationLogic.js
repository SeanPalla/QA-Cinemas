import React, { useState } from 'react';


import Axios from 'axios';

function createUser() {

    // CHANGE BACK TO 5000
    Axios.post('http://localhost:3000/api/users/', )
        .then().catch(err => console.error(err));


}

export default createUser;