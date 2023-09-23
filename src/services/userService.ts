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
}

export default new UserService();
