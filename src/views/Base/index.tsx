import './style.scss';

import { FC } from 'react';
import { Outlet } from 'react-router';

import Header from './components/Header';

const Base: FC = () => {
    return (
        <div className='base'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Base;
