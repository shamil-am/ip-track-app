import './style.scss';

import Cookie from 'js-cookie';
import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as LogoutIcon } from '@/assets/icons/logout.svg';
import { ReactComponent as NotificationIcon } from '@/assets/icons/notification.svg';
import { ReactComponent as ProfileIcon } from '@/assets/icons/profile.svg';
import { useAppDispatch } from '@/hooks';
import userService from '@/services/userService';
import { removeUser } from '@/store/userSlice';
import { ERoutePaths } from '@/types/routePaths';
import { accessToken } from '@/utils/constants/keys';

interface IProps {
    userName: string;
    profileImage: string;
}

const Profile: FC<IProps> = ({ userName, profileImage }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        const response = await userService.logoutUser();
        if (response.status === 200) {
            Cookie.remove(accessToken);
            dispatch(removeUser());
            navigate(ERoutePaths.LOGIN);
        }
    };

    return (
        <div className='user-profile'>
            <div className='profile-top'>
                <div className='notification'>
                    <span className='badge'>5</span>
                    <NotificationIcon />
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
                    <li onClick={handleLogout}>
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
