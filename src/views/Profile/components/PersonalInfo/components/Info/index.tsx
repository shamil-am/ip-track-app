import { useAppSelector } from '@/hooks';
import './style.scss';

import { FC } from 'react';

const Info: FC = () => {
    const { userData } = useAppSelector((state) => state.user);

    return (
        <div className='info'>
            <div className='personal'>
                <img
                    src='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
                    alt=''
                />
                <div className='user-data'>
                    <h5 className='fullname'>
                        {userData?.lastName} {userData?.firstName}
                    </h5>
                    <p className='username'>{userData?.username}</p>
                    <p className='email'>{userData?.email}</p>
                </div>
            </div>
            <div className='general'>
                <h3 className='title'>Ümumi məlumatlar</h3>
                <ul className='table'>
                    <li>
                        <p className='label'>Ad:</p>
                        <p className='value'>{userData?.firstName}</p>
                    </li>
                    <li>
                        <p className='label'>Ata adı:</p>
                        <p className='value'>{userData?.fatherName}</p>
                    </li>
                    <li>
                        <p className='label'>Doğum yeri:</p>
                        <p className='value'>{userData?.birthPlace}</p>
                    </li>
                    <li>
                        <p className='label'>Soyad:</p>
                        <p className='value'>{userData?.firstName}</p>
                    </li>
                    <li>
                        <p className='label'>Doğum tarixi:</p>
                        <p className='value'>{userData?.birthDate}</p>
                    </li>
                    <li>
                        <p className='label'>Cinsi:</p>
                        <p className='value'>{userData?.gender}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
