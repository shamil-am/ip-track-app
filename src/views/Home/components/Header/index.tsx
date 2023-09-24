import './style.scss';

import classNames from 'classnames';
import { FC, useState } from 'react';

import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';
import { ReactComponent as ClearIcon } from '@/assets/icons/cancel.svg';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getIpInfo, resetState } from '@/store/ipInfoSlice';

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const ipState = useAppSelector((state) => state.ip);

    const [ipAddress, setIpAddress] = useState('');

    const handleIpInfo = () => {
        if (ipAddress.trim().length < 8) return;

        dispatch(getIpInfo(ipAddress));
    };

    const clearIpInfo = () => {
        setIpAddress('');
        dispatch(resetState());
    };

    return (
        <header className='home-header'>
            <div className='ip-search'>
                <div className={classNames('title-wrapper', { hide: ipState.ipInfo })}>
                    <h2 className='title'>Header of lorem ipsum derof lorem ipsum</h2>
                    <h6 className='description'>Deaderof lorem ipsum derof lorem ipsum</h6>
                </div>
                <div className='input-wrapper'>
                    <input
                        type='text'
                        placeholder='İstənilən IP ünvanı axtarın'
                        value={ipAddress}
                        onChange={(e) => {
                            setIpAddress(e.target.value);
                        }}
                    />
                    {ipState.ipInfo ? (
                        <button className='btn-clear' onClick={clearIpInfo}>
                            <ClearIcon />
                        </button>
                    ) : (
                        <button className='btn-search' onClick={handleIpInfo}>
                            <SearchIcon />
                        </button>
                    )}
                </div>
            </div>
            <div className='user-profile'>
                <div className='notification'>
                    Not
                    <div className='bagde'>5</div>
                </div>
                <div className='profile'>Profile</div>
            </div>
        </header>
    );
};

export default Header;
