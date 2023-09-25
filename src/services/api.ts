import axios from 'axios';
import Cookie from 'js-cookie';

import { ERoutePaths } from '@/types/routePaths';
import { accessToken } from '@/utils/constants/keys';
import { decryptData, encryptData, getTokenExpiredTime } from '@/utils/helpers';

import userService from './userService';

let refreshTokenPromise: Promise<string> | null = null;

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
    ({ response }) => {
        const { status, config } = response;

        if (status === 401) {
            const token: string = Cookie.get(accessToken) || '';

            if (!token) {
                Cookie.remove(accessToken);
                window.location.href = ERoutePaths.LOGIN;
                return;
            }

            if (!refreshTokenPromise) {
                refreshTokenPromise = userService.getRefreshToken().then(({ data }) => {
                    const token = encryptData(data.data);
                    const expiredTime = getTokenExpiredTime(6);

                    Cookie.set(accessToken, token, { expires: expiredTime });
                    refreshTokenPromise = null;
                    return data.data;
                });
            }

            return refreshTokenPromise
                .then((token: string) => {
                    config.headers['Authorization'] = `Bearer ${token}`;
                    return axiosInstance.request(config);
                })
                .catch(() => {
                    Cookie.remove(accessToken);
                    window.location.href = ERoutePaths.LOGIN;
                });
        }

        return response;
    },
);

axiosInstance.interceptors.request.use((request) => {
    const encryptedToken = Cookie.get(accessToken);
    if (encryptedToken) {
        const accessToken = decryptData(encryptedToken);
        request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
});

export default axiosInstance;
