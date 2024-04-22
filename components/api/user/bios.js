import api from 'util/api';

const bios = {
    // Get bios for the user
    //? Requires userID
    biosGET: async (userID) => {
        // Attempt to send API request
        try {
            const response = await api.get('/v1/user/bios/get', { params: { ID: userID }});
            return response;
        } 
        
        // In case of client or API error
        catch (error) {
            console.log("Bios GET - Error: ", error)
        }
    }
}

module.exports = bios;