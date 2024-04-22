import api from 'util/api';

const avatar = {
    // Get avatar for the user
    //? Requires userID
    avatarGET: async (userID) => {
        // Attempt to send API request
        try {
            const response = await api.get('/v1/user/avatar/get', { params: { ID: userID }});
            return response;
        } 
        
        // In case of client or API error
        catch (error) {
            console.log("Avatar GET - Error: ", error)
        }
    },

    // Set the avatar for the user
    //? Requires ACT and the image file.
    avatarSET: async (ACT, IMG) => {
        try {
            console.log('Formdata in avatarSET: ', IMG);
    
            // Sending request directly with IMG as FormData
            console.log('Sending request...');
    
            const response = await api.post('/v1/user/avatar/set', IMG, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // Include any additional headers if needed
                },
                params: {
                    ACT
                },
            });
            
            return response;
        } catch (error) {
            console.error('Avatar SET - Error: ', error);
            throw new Error('Avatar SET failed.');
        }
    },
    
    // Delete the current avatar
    //? Requires ACT
    avatarDEL: async (ACT) => {
        // Attempt to send API request
        try {
            const response = await api.post('/v1/user/avatar/del', { ACT })
            return response;
        }

        // In case of client or API error
        catch (error) {
            console.error("Avatar DEL - Error: ", error);
        }
    }
}

module.exports = avatar;