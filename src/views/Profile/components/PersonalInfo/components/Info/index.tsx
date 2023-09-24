import './style.scss';

import { FC } from 'react';

const Info: FC = () => {
    return (
        <div className='info'>
            <div className='personal'>
                <img
                    src='https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80'
                    alt=''
                />
                <div className='user-data'>
                    <h5 className='name'>Paşayev Asif Əli</h5>
                    <p className='username'>Pashayevasif123</p>
                    <p className='email'>asif.p@gmail.com</p>
                </div>
            </div>
            <div className='general'>
                <h3 className='title'>Ümumi məlumatlar</h3>
                <ul className='table'>
                    <li>
                        <p className='label'>Ad:</p>
                        <p className='value'>Asif</p>
                    </li>
                    <li>
                        <p className='label'>Ata adı:</p>
                        <p className='value'>Əli</p>
                    </li>
                    <li>
                        <p className='label'>Doğum yeri:</p>
                        <p className='value'>Bakı, Azərbaycan</p>
                    </li>
                    <li>
                        <p className='label'>Soyad:</p>
                        <p className='value'>Paşayev</p>
                    </li>
                    <li>
                        <p className='label'>Doğum tarixi:</p>
                        <p className='value'>12.04.1994</p>
                    </li>
                    <li>
                        <p className='label'>Cinsi:</p>
                        <p className='value'>Kişi</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Info;
