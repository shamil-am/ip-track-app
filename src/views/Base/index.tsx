import './style.scss';

import { FC } from 'react';
import { Navigate, Outlet, useLoaderData } from 'react-router';

import { ERoutePaths } from '@/types/routePaths';

import Header from './components/Header';

const Base: FC = () => {
    const userData = useLoaderData();

    if (!userData) {
        return <Navigate to={ERoutePaths.LOGIN} />;
    }

    return (
        <div className='base'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Base;
