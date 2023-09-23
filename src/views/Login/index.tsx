import './style.scss';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Checkbox from '@/components/common/Checkbox';
import Input from '@/components/common/Input';
import { ILoginData } from '@/types/login';
import { ERoutePaths } from '@/types/routePaths';
import { loginSchema } from '@/utils/constants/schemas';
import { yupResolver } from '@hookform/resolvers/yup';

const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginData>({ resolver: yupResolver(loginSchema) });

    const loginUser: SubmitHandler<ILoginData> = async (data) => {
        console.log('LoggedIn', data);
    };

    return (
        <div className='login'>
            <div className='login-form'>
                <h2 className='title'>Salam, xoş gördük! 👋</h2>
                <form onSubmit={handleSubmit(loginUser)}>
                    <Input
                        label='Email'
                        name='email'
                        placeholder='example@gmail.com'
                        hasError={!!errors.email}
                        register={register}
                    />
                    <Input
                        label='Şifrə'
                        name='password'
                        placeholder='Şifrəniz'
                        hasError={!!errors.password}
                        register={register}
                    />
                    <div className='actions'>
                        <Checkbox variant='check' label='Yadda saxla' onchange={() => {}} />
                        <Link to={ERoutePaths.REGISTER} className='reset-password-link'>
                            Şifrəni unutmusuz?
                        </Link>
                        <button className='btn-enter'>Daxil ol</button>
                    </div>
                </form>
                <p className='non-existent-account'>
                    Hesabınız yoxdur ?
                    <Link to={ERoutePaths.REGISTER} className='register-link'>
                        Qeydiyyat
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
