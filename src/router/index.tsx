import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { ERoutePaths } from '@/types/routePaths';
import Login from '@/views/Login';
import Register from '@/views/Register';

const routes: RouteObject[] = [
    {
        path: ERoutePaths.LOGIN,
        element: <Login />,
    },
    {
        path: ERoutePaths.REGISTER,
        element: <Register />,
    },
];

export const router = createBrowserRouter(routes);
