import './style.scss';

import { FC } from 'react';

import MarkerIconPath from '@/assets/icons/pin.svg';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const initialCoordinates = { lat: 40.353864, lng: 48.477106 };
interface IProps {
    markerCoords: { lat: number; lng: number } | null;
}

const Map: FC<IProps> = ({ markerCoords }) => {
    return (
        <div className='map-container'>
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_KEY}>
                <GoogleMap
                    mapContainerClassName='google-map'
                    center={markerCoords || initialCoordinates}
                    zoom={markerCoords ? 10 : 6}
                >
                    {markerCoords && (
                        <Marker
                            position={markerCoords}
                            icon={{
                                url: MarkerIconPath,
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default Map;
