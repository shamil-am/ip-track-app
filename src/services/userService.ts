import { AxiosResponse } from 'axios';

import { ILoginData } from '@/types/login';
import { IRegisterData } from '@/types/register';
import { IUserProfileData } from '@/types/user';

import api from './api';

class UserService {
    async registerUser(userData: IRegisterData): Promise<any> {
        return await api.post('/v1/users/register', userData);
    }

    async loginUser({ email, password }: ILoginData): Promise<any> {
        return await api.post('/v1/users/login', { emailOrUsername: email, password });
    }

    async getProfileData(): Promise<AxiosResponse<{ data: IUserProfileData }>> {
        return await api.get('/v1/users/get-profile');
    }

    async getRefreshToken(): Promise<AxiosResponse<{ data: string }>> {
        return await api.get('/v1/users/refresh');
    }
}

export default new UserService();
