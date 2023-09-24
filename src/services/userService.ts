import { ILoginData } from '@/types/login';
import { IRegisterData } from '@/types/register';

import api from './api';

class UserService {
    async registerUser(userData: IRegisterData): Promise<any> {
        return await api.post('/v1/users/register', userData);
    }

    async loginUser({ email, password }: ILoginData): Promise<any> {
        return await api.post('/v1/users/login', { emailOrUsername: email, password });
    }

    async getProfileData(): Promise<any> {
        return await api.get('/v1/users/get-profile');
    }
}

export default new UserService();
