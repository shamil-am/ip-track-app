import './style.scss';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from '@/components/common/Input';
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

    const registerUser: SubmitHandler<IRegisterData> = async (data) => {
        console.log('LoggedIn', data);
    };

    return (
        <div className='register'>
            <div className='register-form'>
                <h2 className='title'>Hesab yarat</h2>
                <h6 className='description'>Lorem ipsum!</h6>
                <form onSubmit={handleSubmit(registerUser)}>
                    <Input name='name' placeholder='Adnız' required hasError={!!errors.name} register={register} />
                    <Input name='surname' placeholder='Soyadınız' hasError={!!errors.surname} register={register} />
                    <Input
                        name='userName'
                        placeholder='İstifadəçi adınız'
                        hasError={!!errors.userName}
                        register={register}
                    />
                    <Input name='email' placeholder='E-poçtunuz' hasError={!!errors.email} register={register} />
                    <Input name='password' placeholder='Şifrəniz' hasError={!!errors.password} register={register} />
                    <Input
                        name='passwordConfirm'
                        placeholder='Təkrarlanmış şifrəniz'
                        hasError={!!errors.passwordConfirm}
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
        </div>
    );
};

export default Register;
