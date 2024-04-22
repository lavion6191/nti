import api from 'util/api';

const username = {
    // Get username for the user
    //? Requires userID or Username
    usernameGET: async (identifier) => {
        // Attempt to send API request
        try {
            const response = await api.get('/v1/user/username/get', { params: { ID: identifier }});
            return response;
        } 
        
        // In case of client or API error
        catch (error) {
            console.log("Username GET - Error: ", error)
        }
    }
}

module.exports = username;