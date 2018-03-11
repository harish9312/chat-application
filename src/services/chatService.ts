import { get } from 'src/utils/HTTP';
import { saveAvatars } from '../actions/chatActions';

export async function getAvatars() {
    try {
        const response = await get('http://www.splashbase.co/api/v1/images/latest');
        saveAvatars(response.images);
    } catch (error) {
        throw error;
    }
}
