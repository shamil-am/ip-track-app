import './style.scss';

import { FC } from 'react';

import { IipInfo } from '@/types/ipInfo';

interface IProps {
    ipInfo: IipInfo;
}

const IpInfoTable: FC<IProps> = ({ ipInfo }) => {
    return (
        <div className='ip-information'>
            <ul>
                <li>
                    <div className='info-field'>
                        <h6 className='title'>IP ünvan</h6>
                        <p className='data'>{ipInfo.ip}</p>
                    </div>
                </li>
                <li>
                    <div className='info-field'>
                        <h6 className='title'>Meridian</h6>
                        <p className='data'>{ipInfo.location.lat}</p>
                    </div>
                </li>
                <li>
                    <div className='info-field'>
                        <h6 className='title'>Paralel</h6>
                        <p className='data'>{ipInfo.location.lng}</p>
                    </div>
                </li>
                <li>
                    <div className='info-field'>
                        <h6 className='title'>Ölkə</h6>
                        <p className='data'>{ipInfo.location.country}</p>
                    </div>
                </li>
                <li>
                    <div className='info-field'>
                        <h6 className='title'>Bölgə</h6>
                        <p className='data'>{ipInfo.location.region}</p>
                    </div>
                </li>
                <li>
                    <div className='info-field'>
                        <h6 className='title'>Şəhər</h6>
                        <p className='data'>{ipInfo.location.city}</p>
                    </div>
                </li>
                <li>
                    <div className='info-field'>
                        <h6 className='title'>Zaman qurşağı</h6>
                        <p className='data'>{ipInfo.location.timezone}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default IpInfoTable;
