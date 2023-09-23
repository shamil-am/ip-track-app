import './style.scss';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import Input from '@/components/common/Input';
import userService from '@/services/userService';
import { IRegisterData } from '@/types/register';
import { ERoutePaths } from '@/types/routePaths';
import { registrationSchema } from '@/utils/constants/schemas';
import { yupResolver } from '@hookform/resolvers/yup';

const Register: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterData>({ resolver: yupResolver(registrationSchema) });

    const navigate = useNavigate();

    const registerUser: SubmitHandler<IRegisterData> = async (data) => {
        const response = await userService.registerUser(data);

        if (response?.status === 200) {
            toast('Hesab yaradildi!');
            setTimeout(() => {
                navigate(ERoutePaths.LOGIN);
            }, 1000);
            return;
        }

        toast.error(response?.data?.message);
    };

    return (
        <div className='register'>
            <div className='register-form'>
                <h2 className='title'>Hesab yarat</h2>
                <h6 className='description'>Lorem ipsum!</h6>
                <form onSubmit={handleSubmit(registerUser)}>
                    <Input
                        name='firstName'
                        placeholder='Adnız'
                        required
                        hasError={!!errors.firstName}
                        register={register}
                    />
                    <Input name='lastName' placeholder='Soyadınız' hasError={!!errors.lastName} register={register} />
                    <Input
                        name='username'
                        placeholder='İstifadəçi adınız'
                        hasError={!!errors.username}
                        register={register}
                    />
                    <Input name='email' placeholder='E-poçtunuz' hasError={!!errors.email} register={register} />
                    <Input name='password' placeholder='Şifrəniz' hasError={!!errors.password} register={register} />
                    <Input
                        name='confirmedPassword'
                        placeholder='Təkrarlanmış şifrəniz'
                        hasError={!!errors.confirmedPassword}
                        register={register}
                    />

                    <p className='existent-account'>
                        <span className='text'>Hesabınız var?</span>
                        <Link to={ERoutePaths.LOGIN} className='login-link'>
                            Daxil ol
                        </Link>
                    </p>
                    <button className='btn-register'>Qeydiyyat</button>
                </form>
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

export default Register;
