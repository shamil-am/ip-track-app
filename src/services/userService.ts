import { AxiosResponse } from 'axios';

import { ILoginData } from '@/types/login';
import { IRegisterData } from '@/types/register';
import { IUserEditData, IUserProfileData } from '@/types/user';

import api from './api';

class UserService {
    async registerUser(userData: IRegisterData): Promise<any> {
        return await api.post('/v1/users/register', userData);
    }

    async loginUser({ email, password }: ILoginData): Promise<any> {
        return await api.post('/v1/users/login', { emailOrUsername: email, password });
    }

    async logoutUser(): Promise<any> {
        return await api.post('/v1/users/logout');
    }

    async getProfileData(): Promise<AxiosResponse<{ data: IUserProfileData }>> {
        return await api.get('/v1/users/get-profile');
    }

    async getRefreshToken(): Promise<AxiosResponse<{ data: string }>> {
        return await api.get('/v1/users/refresh');
    }

    async uploadProfileImage(imageData: FormData): Promise<any> {
        return await api.post('/v1/files/images/upload', imageData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    }

    async updateUserData(userData: IUserEditData): Promise<any> {
        return await api.put('/v1/users', userData);
    }
}

export default new UserService();
