
import axios from 'axios'

export const key = 'c8e0568134fce7cbc6afd448687fe494ac2b1517';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;
