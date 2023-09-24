import { createBrowserRouter, RouteObject } from 'react-router-dom';

import PrivateRoute from '@/components/routing/PrivateRoute';
import PublicRoute from '@/components/routing/PublicRoute';
import userService from '@/services/userService';
import { ERoutePaths } from '@/types/routePaths';
import Base from '@/views/Base';
import Home from '@/views/Home';
import Login from '@/views/Login';
import Profile from '@/views/Profile';
import Register from '@/views/Register';

const routes: RouteObject[] = [
    {
        path: ERoutePaths.LOGIN,
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: ERoutePaths.REGISTER,
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        ),
    },
    {
        path: ERoutePaths.HOME,
        element: (
            <PrivateRoute>
                <Base />
            </PrivateRoute>
        ),
        loader: async () => {
            const response = await userService.getProfileData();
            if (response.status === 200) {
                return response.data?.data;
            }
            return null;
        },
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ERoutePaths.PROFILE,
                element: <Profile />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
