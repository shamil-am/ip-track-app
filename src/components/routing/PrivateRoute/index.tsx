import Cookie from 'js-cookie';
import { FC, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { getUserData } from '@/store/userSlice';
import { ERoutePaths } from '@/types/routePaths';
import { accessToken } from '@/utils/constants/keys';

interface IProps {
    children: JSX.Element;
}

const PrivateRoute: FC<IProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { userData } = useAppSelector((state) => state.user);
    const token = Cookie.get(accessToken);

    useEffect(() => {
        if (token && !userData) {
            dispatch(getUserData());
        }
    }, [token, dispatch, userData]);

    return userData || token ? children : <Navigate to={ERoutePaths.LOGIN} replace />;
};

export default PrivateRoute;
