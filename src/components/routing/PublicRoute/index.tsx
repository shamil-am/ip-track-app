import Cookie from 'js-cookie';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks';
import { ERoutePaths } from '@/types/routePaths';
import { accessToken } from '@/utils/constants/keys';

interface IProps {
    children: JSX.Element;
}

const PublicRoute: FC<IProps> = ({ children }) => {
    const { userData } = useAppSelector((state) => state.user);
    const token = Cookie.get(accessToken);

    return userData || token ? <Navigate to={ERoutePaths.HOME} /> : children;
};

export default PublicRoute;
