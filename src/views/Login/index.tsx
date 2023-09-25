import './style.scss';

import Cookie from 'js-cookie';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Checkbox from '@/components/common/Checkbox';
import Input from '@/components/common/Input';
import userService from '@/services/userService';
import { ILoginData } from '@/types/login';
import { ERoutePaths } from '@/types/routePaths';
import { accessToken } from '@/utils/constants/keys';
import { loginSchema } from '@/utils/constants/schemas';
import { encryptData, getTokenExpiredTime } from '@/utils/helpers';
import { yupResolver } from '@hookform/resolvers/yup';

const Login: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginData>({ resolver: yupResolver(loginSchema) });

    const navigate = useNavigate();

    const loginUser: SubmitHandler<ILoginData> = async (data) => {
        const response = await userService.loginUser(data);

        if (response?.status === 200) {
            const token = encryptData(response.data.data);
            const expiredTime = getTokenExpiredTime(6);

            Cookie.set(accessToken, token, { expires: expiredTime });

            navigate(ERoutePaths.HOME);

            return;
        }

        toast.error(response.data?.message);
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
            <ToastContainer
                position='top-right'
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </div>
    );
};

export default Login;
