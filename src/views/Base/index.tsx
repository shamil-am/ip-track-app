import { FC } from 'react';
import { Navigate, Outlet, useLoaderData } from 'react-router';

import { ERoutePaths } from '@/types/routePaths';

const Base: FC = () => {
    const userData = useLoaderData();

    if (!userData) {
        return <Navigate to={ERoutePaths.LOGIN} />;
    }

    return (
        <div className='app'>
            <Outlet />
        </div>
    );
};

export default Base;
