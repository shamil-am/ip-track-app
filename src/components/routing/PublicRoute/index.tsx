import React from 'react';
import { Navigate } from 'react-router-dom';

import { ERoutePaths } from '@/types/routePaths';

interface IProps {
    children: JSX.Element;
}

const isAuthenticated = false;

const PublicRoute: React.FC<IProps> = ({ children }) => {
    return isAuthenticated ? <Navigate to={ERoutePaths.HOME} /> : children;
};

export default PublicRoute;
