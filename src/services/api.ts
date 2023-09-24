import axios from 'axios';

import { getFromLocalStorage } from '@/utils/helpers';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 0,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // const { status, config } = error.response;

        return error.response;
    },
);

axiosInstance.interceptors.request.use((request) => {
    const accessToken: string | null = getFromLocalStorage('accessToken');
    if (accessToken) {
        request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
});

export default axiosInstance;
