import axios from 'axios';

export async function get(URL: string) {
    try {
        const response = await axios.get(URL);
        return response.data;

    } catch (error) {
        throw error;
    }
}
