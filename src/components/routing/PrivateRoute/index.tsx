import React from 'react';
import { Navigate } from 'react-router-dom';

import { ERoutePaths } from '@/types/routePaths';

interface IProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<IProps> = ({ children }) => {
    const isAuthenticated = true;

    return isAuthenticated ? children : <Navigate to={ERoutePaths.LOGIN} replace />;
};

export default PrivateRoute;
