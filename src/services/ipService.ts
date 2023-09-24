import { AxiosResponse } from 'axios';

import { IipInfo } from '@/types/ipInfo';

import api from './api';

class IpService {
    async getIpInfo(ip: string): Promise<AxiosResponse<{ data: IipInfo }>> {
        return await api.get('/v1/ip-trackers', { params: { ip } });
    }
}

export default new IpService();
