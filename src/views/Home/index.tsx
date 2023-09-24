import './style.scss';

import { FC } from 'react';

import { useAppSelector } from '@/hooks';

import IpInfoTable from './components/IpInfoTable';
import Map from './components/Map';

const Home: FC = () => {
    const ipState = useAppSelector((state) => state.ip);

    const markerCoords = ipState?.ipInfo
        ? {
              lat: +ipState.ipInfo.location.lat,
              lng: +ipState.ipInfo.location.lng,
          }
        : null;

    return (
        <div className='home'>
            <Map markerCoords={markerCoords} />
            {ipState.ipInfo && <IpInfoTable ipInfo={ipState.ipInfo} />}
        </div>
    );
};

export default Home;
