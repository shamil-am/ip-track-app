import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://iptracker-test-d77494517217.herokuapp.com',
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
        // const { status, config, data } = error.response;

        return error.response;
    },
);

export default axiosInstance;
