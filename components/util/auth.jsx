// utils/auth.js

import Cookies from 'js-cookie'
import api from 'util/api'

export const getRole = () => {
    const ACT = Cookies.get('ACT');
    // Make an API request to get the user's role
    return api.post('/user/role', { ACT }).then((response) => {
        return response.data.role;
    });
};