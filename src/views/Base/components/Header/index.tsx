import './style.scss';

import classNames from 'classnames';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowLeftIcon } from '@/assets/icons/arrow-left.svg';
import Button from '@/components/common/Button';
import { ERoutePaths } from '@/types/routePaths';

import IpSearch from './components/IpSearch';
import Profile from './components/Profile';

const pageTitles: Partial<Record<ERoutePaths, React.ReactNode>> = {
    [ERoutePaths.HOME]: <IpSearch />,
    [ERoutePaths.PROFILE]: <h2 className='page-title'>Şəxsi profilim</h2>,
};

const Header: FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <header className={classNames('header', { fixed: pathname === ERoutePaths.HOME })}>
            {pathname !== ERoutePaths.HOME && (
                <Button
                    label='Axtarış'
                    icon={<ArrowLeftIcon />}
                    variant='gray'
                    onClick={() => navigate(ERoutePaths.HOME)}
                />
            )}
            {pageTitles[pathname as ERoutePaths]}
            <Profile
                userName='Shamil'
                profileImage='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
            />
        </header>
    );
};

export default Header;
