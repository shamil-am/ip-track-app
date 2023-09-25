import './style.scss';

import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';

import IpInfoTable from './components/IpInfoTable';
import Map from './components/Map';
import { resetState } from '@/store/ipInfoSlice';

const Home: FC = () => {
    const ipState = useAppSelector((state) => state.ip);
    const dispatch = useAppDispatch();

    const markerCoords = ipState?.ipInfo
        ? {
              lat: +ipState.ipInfo.location.lat,
              lng: +ipState.ipInfo.location.lng,
          }
        : null;

    useEffect(() => {
        return () => {
            dispatch(resetState());
        };
    }, []);

    return (
        <div className='home'>
            <Map markerCoords={markerCoords} />
            {ipState.ipInfo && <IpInfoTable ipInfo={ipState.ipInfo} />}
        </div>
    );
};

export default Home;
