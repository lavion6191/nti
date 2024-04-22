import Cookies from 'js-cookie';
import api from './api';

export async function TokenManager(REFT, ACT) {
    if (REFT && !ACT) {
        try {
            const response = await api.post('/v1/user/auth/ACT', { REFT: REFT });
            const newACT = response.data.ACT;
            const domain = process.env.NODE_ENV === 'development' ? 'localhost' : '.invalsia.com';
            Cookies.set('act', newACT, { expires: (1 / 1440) * 15, domain });
        } catch (error) {
            console.error('Error renewing token:', error);
        }
    }
}
