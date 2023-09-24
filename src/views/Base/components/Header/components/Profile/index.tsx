import './style.scss';

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoutIcon } from '@/assets/icons/logout.svg';
// import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg';
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg';
import { ERoutePaths } from '@/types/routePaths';

interface IProps {
    userName: string;
    profileImage: string;
}

const Profile: FC<IProps> = ({ userName, profileImage }) => {
    return (
        <div className='user-profile'>
            <div className='profile-top'>
                <div className='notification'>
                    <span className='badge'>25</span>
                    <ProfileIcon />
                </div>
                <h4 className='user-name'>{userName}</h4>
                <img src={profileImage} alt={userName} className='user-image' />
            </div>
            <div className='profile-bottom'>
                <ul>
                    <li>
                        <ProfileIcon />
                        <Link to={ERoutePaths.PROFILE} className='menu-link'>
                            Şəxsi profilim
                        </Link>
                    </li>
                    <li>
                        <LogoutIcon />
                        <a href='#' className='menu-link'>
                            Çıxış et
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
